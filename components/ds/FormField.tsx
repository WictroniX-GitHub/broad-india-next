import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const control =
  "peer w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 transition-all focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 [&:user-invalid]:border-red-400 [&:user-invalid]:ring-red-200";

interface BaseProps {
  label: string;
  name: string;
  hint?: string;
  className?: string;
}

type InputProps = BaseProps & { as?: "input" } & Omit<InputHTMLAttributes<HTMLInputElement>, "name">;
type TextareaProps = BaseProps & { as: "textarea" } & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name">;
type SelectProps = BaseProps & { as: "select"; options: string[] } & Omit<SelectHTMLAttributes<HTMLSelectElement>, "name">;

export type FormFieldProps = InputProps | TextareaProps | SelectProps;

/** Labelled form control with brand focus ring and native inline validation styling. */
export default function FormField(props: FormFieldProps) {
  const { label, name, hint, className } = props;
  const id = `ff-${name}`;
  const required = "required" in props && props.required;

  let field;
  if (props.as === "textarea") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, label: _l, hint: _h, className: _c, name: _n, ...rest } = props;
    field = <textarea id={id} name={name} rows={4} {...rest} className={cn(control, "resize-none")} />;
  } else if (props.as === "select") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, label: _l, hint: _h, className: _c, name: _n, options, ...rest } = props;
    field = (
      <select id={id} name={name} defaultValue="" {...rest} className={control}>
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    );
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, label: _l, hint: _h, className: _c, name: _n, ...rest } = props;
    field = <input id={id} name={name} type="text" {...rest} className={control} />;
  }

  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="ml-0.5 text-brand-600">*</span>}
      </label>
      {field}
      {hint && <p className="text-xs text-gray-500">{hint}</p>}
    </div>
  );
}
