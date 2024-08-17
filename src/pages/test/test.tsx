import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import { validateFormData } from "@/pages/test/validationSchemaTest.ts";
import {
  RootState,
  selectCountries,
  setControlledFormData,
} from "@/shared/store";
import { Country, CustomFormData } from "@/shared/types";

export const Test = () => {
  const countries = useSelector((state: RootState) => selectCountries(state));

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<CustomFormData>();

  const onSubmit = async (data: CustomFormData) => {
    const imageBase64: string | undefined = undefined;

    const validationResult = await validateFormData({
      ...data,
    });

    if (validationResult.valid) {
      console.group();
      console.log("Form submitted successfully!");
      console.groupEnd();

      clearErrors();
      setSuccessMessage("Form submitted successfully!");
      dispatch(
        setControlledFormData({
          ...data,
          gender: data.gender || "",
          image: imageBase64 || "",
          timestamp: Date.now(),
        }),
      );

      setTimeout(() => {
        navigate("/");
      }, 700);
    } else {
      validationResult.errors.forEach((error: string) => {
        if (error.includes("Name")) setError("name", { message: error });
        if (error.includes("terms")) setError("terms", { message: error });
      });
      setSuccessMessage(null);
    }
  };

  // Преобразование данных из Redux в формат для Select
  const countryOptions = countries.map((country: Country) => ({
    value: country.code,
    label: country.name,
  }));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              id="name"
              {...field}
              className={`rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your name"
            />
          )}
        />
        {errors.name && (
          <div className="form-error text-red-600">{errors.name.message}</div>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="country"
          className="mb-2 text-lg font-medium text-gray-800"
        >
          Country
        </label>
        <Controller
          name="country"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <Select
              id="country"
              {...field}
              options={countries.map((country: Country) => ({
                value: country.code,
                label: country.name,
                ...country,
              }))}
              className={`rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.country ? "border-red-500" : "border-gray-300"
              }`}
              isClearable={true}
              placeholder="Select or enter country"
              onChange={(selectedOption) => field.onChange(selectedOption)}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.code}
            />
          )}
        />

        {errors.country && (
          <div className="form-error text-red-600">
            {errors.country.message}
          </div>
        )}
      </div>

      <button type="submit" className="btn-submit btn-submit--enabled">
        Submit
      </button>

      {successMessage && (
        <div className="text-center text-green-600">{successMessage}</div>
      )}
    </form>
  );
};
