import { FormEvent, useRef, useState } from "react";
import Select from "react-select";

import { countries } from "@/shared";
import { Country, UncontrolledFormData } from "@/shared/types";

import { validateFormData } from "./validationSchemaTest.ts";

export const Test = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<Country | null>(null);

  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const selectedCountry = countryRef.current || { code: "", name: "" };

    const formData: UncontrolledFormData = {
      name: nameRef.current?.value || "",
      country: selectedCountry,
    };

    const validationResult = await validateFormData(formData);

    if (validationResult.valid) {
      console.log("Form submitted successfully!");
      setErrors({});
    } else {
      const newErrors: { [key: string]: string } = {};
      validationResult.errors.forEach((error: string) => {
        if (error.includes("Name")) newErrors.name = error;
        if (error.includes("Country")) newErrors.country = error;
      });

      setErrors(newErrors);
    }
  };

  const handleCountryChange = (
    selectedOption: { value: string; label: string } | null,
  ) => {
    if (selectedOption) {
      const selectedCountry = countries.find(
        (country) => country.code === selectedOption.value,
      ) || { code: "", name: "" };
      countryRef.current = selectedCountry;
    } else {
      countryRef.current = null;
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
          htmlFor="country"
          className="mb-2 text-lg font-medium text-gray-800"
        >
          Country
        </label>
        <Select
          id="country"
          name="country"
          onChange={handleCountryChange}
          options={countries.map((country: Country) => ({
            value: country.code,
            label: country.name,
          }))}
          className={`rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            errors.country ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.country && (
          <div className="form-error text-red-600">{errors.country}</div>
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
