import { FormEvent, useRef, useState } from "react";

import { UncontrolledFormData } from "@/shared/types";

import { validateFormData } from "./validationSchemaTest.ts";

export const Test = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: UncontrolledFormData = {
      name: nameRef.current?.value || "",
      image: imageRef.current?.files?.[0] || undefined,
    };

    const validationResult = await validateFormData(formData);

    if (validationResult.valid) {
      console.log("Form submitted successfully!");
      setErrors({});
    } else {
      const newErrors: { [key: string]: string } = {};
      validationResult.errors.forEach((error: string) => {
        if (error.includes("Name")) newErrors.name = error;
        if (error.includes("Image")) newErrors.image = error;
        // Other error handling logic
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
          placeholder="Enter your name"
        />
        {errors.name && (
          <div className="form-error text-red-600">{errors.name}</div>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="image"
          className="mb-2 text-lg font-medium text-gray-800"
        >
          Upload Image
        </label>
        <input
          id="image"
          name="image"
          type="file"
          ref={imageRef}
          accept=".png, .jpeg, .jpg"
          className={`rounded-lg border p-3 focus:outline-none ${
            errors.image ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.image && (
          <div className="form-error text-red-600">{errors.image}</div>
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
