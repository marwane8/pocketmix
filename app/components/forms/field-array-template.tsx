import { zodResolver } from "@hookform/resolvers/zod";
import { useLoaderData, useNavigate, useSubmit } from "@remix-run/react";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import InputField from "~/components/forms/input-field";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { getParamValue } from "~/utils/js.util";
import Section from "~/components/section";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log("loading /template");
  const { searchParams } = new URL(request.url);
  const id = getParamValue(searchParams, "id");
  return { id };
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = JSON.parse(String(formData.get("data")));
  console.log(data);
  return null; 
};

export default function FormTemplate() {
  const { id } = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const submit = useSubmit();

  const schema = z.object({
    id: z.string().optional(),
    name: z.string(),
    key: z.string(),
  });

  type FormFields = z.infer<typeof schema>;
  const form = useForm<FormFields>({
    resolver: zodResolver(schema),
    defaultValues: { id: id, name: "", key: "" },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSave: SubmitHandler<FormFields> = (data) => {
    console.log("saving data");
    submit({ data }, { method: "POST" });
  };

  return (
    <div className="mb-4">
      <Section title="My Form">
        <form
          onSubmit={handleSubmit(onSave)}
          method="POST"
        >
          <FormProvider {...form}>
            <div className="my-4 grid grid-cols-6 gap-2">
              <InputField
                name="name"
                className="col-span-full md:col-span-3"
                required
              />
              <InputField
                name="key"
                className="col-span-full md:col-span-3"
                required
              />
            </div>


            <div className="col-span-2 flex justify-evenly">
              <button
                className="btn btn-primary my-2 rounded-md px-7 py-1 text-lg"
                type="submit"
              >
                Save
              </button>
              <button
                className="btn btn-neutral my-2 rounded-md px-7 py-1 text-lg"
                onClick={() => navigate(-1)}
                disabled={isSubmitting}
              >
                Back
              </button>
            </div>
          </FormProvider>
        </form>
      </Section>
    </div>
  );
}
