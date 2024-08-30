import { useFormContext } from "react-hook-form";
import ToolTip from "../tooltip";
import { classNames, captialCase } from "~/utils/js.util";

type Props = {
  name: string;
  className?: string;
  type?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  tip?: string;
  error?: any;
};

export default function InputField({
  name,
  className = "",
  type,
  label,
  required,
  disabled,
  placeholder,
  tip,
  error,
}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={className}>
      <label htmlFor={name}>
        {errors[name] || error ? (
          error ? (
            <p className="text-sm text-red-600">{error.message}</p>
          ) : (
            // @ts-expect-error: message is a property of errors[name]
            <p className="text-sm text-red-600">{errors[name].message}</p>
          )
        ) : (
          <div className="h-5" />
        )}

        <input
          {...register(`${name}`)}
          className={classNames(
            "input input-bordered w-full",
            (errors[name] || error) && "input-error"
          )}
          type={type || "text"}
          name={name}
          placeholder={placeholder || captialCase(name)}
          required={required || false}
          disabled={disabled || false}
        />
        <div className="label-text">
          <span className="mr-1">
            {label || captialCase(name)} {required && "*"}
          </span>
          {tip && <ToolTip tip={tip} className="tooltip-right" />}
        </div>
      </label>
    </div>
  );
}
