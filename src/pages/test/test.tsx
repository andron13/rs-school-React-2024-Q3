import { ChangeEvent, FormEvent, useRef, useState } from "react";

import { schema, validateFormData } from "@/shared/validationSchema.ts";

export const Test = () => {
  // refs
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);

  // states
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
  const [canSubmit, setCanSubmit] = useState<boolean>(false);

  const validateField = async (fieldName: string, value: string | boolean) => {
    try {
      await schema.validateAt(fieldName, { [fieldName]: value });
      return null;
    } catch (err) {
      return (err as Error).message;
    }
  };

  const handleInputChange = async (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, type, value, checked } = target;
    const inputValue: string | boolean = type === "checkbox" ? checked : value;

    console.log(`Input Change - Name: ${name}, Value: ${inputValue}`);

    const error = await validateField(name, inputValue);

    console.log(`Validation Error for ${name}:`, error);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    const formData = {
      name: nameRef.current?.value || "",
      password: passwordRef.current?.value || "",
      confirmPassword: confirmPasswordRef.current?.value || "",
      terms: termsRef.current?.checked || false,
    };

    console.log("Form Data on Change:", formData);

    const valid = await validateFormData(formData);

    console.log("Validation Result:", valid);

    setCanSubmit(valid.valid);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      name: nameRef.current?.value || "",
      password: passwordRef.current?.value || "",
      confirmPassword: confirmPasswordRef.current?.value || "",
      terms: termsRef.current?.checked || false,
    };

    console.log("Form Data on Submit:", formData);

    const valid = await validateFormData(formData);

    console.log("Validation Result on Submit:", valid);

    if (valid.valid) {
      console.log("Form submitted successfully!");
    } else {
      console.error("Form is invalid", valid.errors);
      setErrors((prevErrors) => ({
        ...prevErrors,
        ...valid.errors.reduce(
          (acc, error) => {
            const [field, message] = error.split(": ");
            acc[field] = message;
            return acc;
          },
          {} as { [key: string]: string },
        ),
      }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg space-y-6 rounded-lg bg-white p-8 shadow-lg"
    >
      <div className="text-center text-2xl font-bold text-blue-600">
        Join Us
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="name"
          className="mb-2 text-lg font-medium text-gray-800"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          ref={nameRef}
          onChange={handleInputChange}
          className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          placeholder="Enter your name"
        />
        {errors.name && <div className="form-error">{errors.name}</div>}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="mb-2 text-lg font-medium text-gray-800"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password" // Исправлено с type="text" на type="password"
          ref={passwordRef}
          onChange={handleInputChange}
          className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          placeholder="Enter your password"
        />
        {errors.password && <div className="form-error">{errors.password}</div>}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="confirmPassword"
          className="mb-2 text-lg font-medium text-gray-800"
        >
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password" // Исправлено с type="text" на type="password"
          ref={confirmPasswordRef}
          onChange={handleInputChange}
          className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && (
          <div className="form-error">{errors.confirmPassword}</div>
        )}
      </div>

      <div className="flex items-center gap-6">
        <label htmlFor="terms" className="text-lg font-medium text-gray-800">
          Accept Terms and Conditions
        </label>
        <input
          id="terms"
          name="terms"
          type="checkbox"
          ref={termsRef}
          onChange={handleInputChange}
          required
          className="w-3 scale-150 transform"
        />
        {errors.terms && <div className="form-error">{errors.terms}</div>}
      </div>

      <div>
        <button
          disabled={!canSubmit}
          type="submit"
          className={`btn-submit ${
            canSubmit ? "btn-submit--enabled" : "btn-submit--disabled"
          }`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
