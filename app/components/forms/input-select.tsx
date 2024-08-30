import { useFormContext } from "react-hook-form";
import { captialCase } from "~/utils/js.util";
import ToolTip from "../tooltip";

type Props = {
  name: string;
  options: any[];
  className?: string;
  required?: boolean;
  label?: string;
  disabled?: boolean;
  tip?: string;
  error?: any;
};

export default function InputSelect({
  name,
  options,
  className = "",
  label,
  required,
  disabled,
  tip,
  error,
}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={`${className}`}>
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

        <select
          {...register(`${name}`)}
          className="select select-bordered w-full"
          name={name}
          required={required || false}
          disabled={disabled || false}
        >
          <option
            disabled
            value=""
          >
            ...select
          </option>
          {options.map((val, i) => (
            <option
              key={i}
              value={val}
            >
              {val}
            </option>
          ))}
        </select>

        <div className="label-text">
          <span className="mr-1">{label || captialCase(name)}</span>
          {tip && (
            <ToolTip
              tip={tip}
              className="tooltip-right"
            />
          )}
        </div>
      </label>
    </div>
  );
}
