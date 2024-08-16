import { FormEvent, useRef, useState } from "react";

import { validateFormData } from "./validationSchemaTest.ts";

export const Test = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      name: nameRef.current?.value || "",
      password: passwordRef.current?.value || "",
      confirmPassword: confirmPasswordRef.current?.value || "",
      terms: termsRef.current?.checked || false,
    };

    const validationResult = await validateFormData(formData);

    if (validationResult.valid) {
      console.log("Form submitted successfully!");
      setErrors({});
    } else {
      const newErrors: { [key: string]: string } = {};
      validationResult.errors.forEach((error: string) => {
        if (error.includes("Name")) newErrors.name = error;
        if (error.includes("Password must include")) newErrors.password = error;
        if (error.includes("Confirm Password"))
          newErrors.confirmPassword = error;
        if (error.includes("must match")) newErrors.confirmPassword = error;
        if (error.includes("terms")) newErrors.terms = error;
      });

      setErrors(newErrors);
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
          className={`rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          // required
          placeholder="Enter your name"
        />
        {errors.name && (
          <div className="form-error text-red-600">{errors.name}</div>
        )}
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
          type="password"
          ref={passwordRef}
          className={`rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            errors.password ? "border-red-500" : "border-gray-300"
          }`}
          // required
          placeholder="Enter your password"
        />
        {errors.password && (
          <div className="form-error text-red-600">{errors.password}</div>
        )}
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
          type="password"
          ref={confirmPasswordRef}
          className={`rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            errors.confirmPassword ? "border-red-500" : "border-gray-300"
          }`}
          // required
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && (
          <div className="form-error text-red-600">
            {errors.confirmPassword}
          </div>
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
          // required
          className={`w-3 scale-150 transform ${errors.terms ? "border-red-500" : ""}`}
        />
        {errors.terms && (
          <div className="form-error text-red-600">{errors.terms}</div>
        )}
      </div>

      <div>
        <button type="submit" className="btn-submit btn-submit--enabled">
          Submit
        </button>
      </div>
    </form>
  );
};
