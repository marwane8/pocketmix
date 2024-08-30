import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams, useSubmit } from "@remix-run/react";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import InputField from "~/components/forms/input-field";

export default function FormTemplate() {
  const params = useParams();
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
    defaultValues: { id: 1, name: "", key: "" },
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
      <form onSubmit={handleSubmit(onSave)} method="POST">
        <FormProvider {...form}>
          <h2 className="text-xl font-semibold"> Sub Title </h2>
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

          <div className="col-span-full my-4 w-full border-b-2 border-gray-200" />

          <div className="col-span-2 flex justify-evenly">
            <button
              className="primary my-2 rounded-md px-7 py-1 text-lg"
              type="submit"
            >
              Save
            </button>
            <button
              className="white-btn my-2 rounded-md px-7 py-1 text-lg"
              onClick={() => navigate(-1)}
              disabled={isSubmitting}
            >
              Back
            </button>
          </div>
        </FormProvider>
      </form>
    </div>
  );
}
