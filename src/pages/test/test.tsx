import { FormEvent, useRef, useState } from "react";

import { validateFormData } from "./validation";

export const Test = () => {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<{ name: string }>({ name: "" });
  const nameRef = useRef<HTMLInputElement>(null);

  const validateAndSetError = async (data: { name: string }) => {
    const { valid, errors } = await validateFormData(data);
    if (valid) {
      setError(null);
    } else {
      setError(errors.join(", "));
    }
    return valid;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name: nameRef.current?.value.trim() || "",
    };

    const isValid = await validateAndSetError(formData);

    if (isValid) {
      console.log("Form data:", formData);
    }

    setIsSubmitting(false);
  };

  const handleChange = async () => {
    const formData = {
      name: nameRef.current?.value.trim() || "",
    };

    setFormData(formData);
    await validateAndSetError(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-96 max-w-lg space-y-6 rounded-lg bg-white p-8 shadow-lg"
    >
      <div className="flex flex-col">
        <label
          htmlFor="name"
          className="mb-2 text-lg font-medium text-gray-800"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          ref={nameRef}
          className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          placeholder="Enter your name"
          onChange={handleChange}
        />
      </div>
      {error && <div className="text-red-600">{error}</div>}
      <div>
        <button
          type="submit"
          className={`w-full rounded-lg py-3 text-white shadow-md transition duration-300 ${
            isSubmitting || !!error
              ? "cursor-not-allowed bg-gray-500 hover:bg-gray-500"
              : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
          }`}
          disabled={isSubmitting || !!error}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};
