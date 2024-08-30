import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useSubmit } from "@remix-run/react";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import InputField from "~/components/forms/input-field";
import InputSelect from "~/components/forms/input-select";

export default function FormTemplate() {
  const params = useParams();
  const submit = useSubmit();

  const eventTypes = ["Select an Event...", "Wedding", "Party", "Other"];

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
    <div className="m-5 max-w-screen-lg md:mx-auto">
      <div className="text-2xl text-center">
        <h2 className=" font-playfair_d text-3xl font-semibold my-1">
          {" "}
          CONTACT US{" "}
        </h2>
        <h2 className="text-xl tracking-tighter"> MILOUD PHOTOGRAPHY </h2>
        <h4 className="font-sans font-thin text-base">
          30-10 34th St, Astoria, NY 11103
        </h4>
        <h4 className="font-sans font-thin text-base">
          miloudphotography@gmail.com
        </h4>
        <h4 className="font-sans font-thin text-base">718.777.1049</h4>
      </div>
      <form onSubmit={handleSubmit(onSave)} method="POST">
        <FormProvider {...form}>
          <div className="my-4 grid grid-cols-2 gap-2">
            <InputField name="first_name" required />
            <InputField name="last_name" required />
            <InputField name="email" className="col-span-full" required />
            <InputSelect name="event_type" options={eventTypes} />
            <InputField name="event_date" type="date" />
            <div className="col-span-full">
              <label htmlFor="Message">
                <textarea
                  className="textarea textarea-bordered h-24 w-full"
                  placeholder="Message"
                />
                <div className="label-text">Message</div>
              </label>
            </div>
          </div>

          <div className="col-span-2 flex justify-evenly my-5">
            <button className="cta-btn w-32" type="submit">
              SUBMIT
            </button>
          </div>
        </FormProvider>
      </form>
    </div>
  );
}
