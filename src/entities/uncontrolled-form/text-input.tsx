import { InputHTMLAttributes, forwardRef } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, ...props }, ref) => (
    <div className="flex flex-col">
      <label className="mb-2 text-lg font-medium text-gray-800">{label}</label>
      <input
        ref={ref}
        className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        {...props}
      />
    </div>
  ),
);
