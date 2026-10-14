import type { HTMLInputAutoCompleteAttribute } from "react";

type TrialFieldProps = {
  id: string;
  label: string;
  kind?: "text" | "tel" | "email" | "select" | "textarea";
  required?: boolean;
  error?: string;
  options?: { label: string; value: string }[];
  autoComplete?: HTMLInputAutoCompleteAttribute;
  placeholder?: string;
};

export function TrialField({ id, label, kind = "text", required, error, options = [], autoComplete, placeholder }: TrialFieldProps) {
  const shared = {
    id, name: id, required, className: "ds-trial-control",
    "aria-invalid": error ? true as const : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
  };
  return (
    <div className={`ds-trial-field${kind === "select" || kind === "textarea" ? " ds-trial-field--wide" : ""}`}>
      <label htmlFor={id}>{label}{required && <span aria-hidden="true">*</span>}</label>
      {kind === "select" ? (
        <select {...shared} defaultValue="">
          <option value="" disabled>请选择产品</option>
          {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
      ) : kind === "textarea" ? (
        <textarea {...shared} placeholder={placeholder} maxLength={2000} />
      ) : (
        <input {...shared} type={kind} autoComplete={autoComplete} placeholder={placeholder} maxLength={kind === "email" ? 254 : 100} />
      )}
      {error && <p id={`${id}-error`} className="ds-trial-error">{error}</p>}
    </div>
  );
}
