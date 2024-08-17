import { FormEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import { fileToBase64, parseGender } from "@/shared/const";
import {
  RootState,
  selectCountries,
  setUncontrolledFormData,
} from "@/shared/store";
import {
  Country,
  CustomFormData,
  FormDataInRedux,
  Gender,
} from "@/shared/types";
import { validateFormData } from "@/shared/validationSchema.ts";

export const UncontrolledForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // refs
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<Country | null>(null);
  //
  const countries = useSelector((state: RootState) => selectCountries(state));

  // states
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  //logic

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let imageBase64: string | undefined = undefined;

    if (imageRef.current?.files?.[0]) {
      imageBase64 = await fileToBase64(imageRef.current.files[0]);
    }

    const formData: CustomFormData = {
      name: nameRef.current?.value || "",
      age: parseInt(ageRef.current?.value || "0"),
      email: emailRef.current?.value || "",
      gender: parseGender(genderRef.current?.value || ""),
      password: passwordRef.current?.value || "",
      confirmPassword: confirmPasswordRef.current?.value || "",
      terms: termsRef.current?.checked || false,
      image: imageRef.current?.files?.[0] || undefined,
      country: countryRef.current || { code: "", name: "" },
    };

    const validationResult = await validateFormData(formData);

    if (validationResult.valid) {
      setErrors({});
      setSuccessMessage("Form submitted successfully!");

      const formDataForRedux: FormDataInRedux = {
        ...formData,
        gender: formData.gender || "",
        image: imageBase64 || "",
        terms: formData.terms || false,
        timestamp: Date.now(),
      };

      dispatch(setUncontrolledFormData(formDataForRedux));
      setTimeout(() => {
        navigate("/");
      }, 700);
    } else {
      const newErrors: { [key: string]: string } = {};
      validationResult.errors.forEach((error: string) => {
        if (error.includes("Name")) newErrors.name = error;
        if (error.includes("Age")) newErrors.age = error;
        if (error.includes("Email")) newErrors.email = error;
        if (error.includes("Gender")) newErrors.gender = error;
        if (error.includes("Password must include")) newErrors.password = error;
        if (error.includes("Confirm Password"))
          newErrors.confirmPassword = error;
        if (error.includes("must match")) newErrors.confirmPassword = error;
        if (error.includes("terms")) newErrors.terms = error;
        if (error.includes("Image")) newErrors.image = error;
        // Country don't need to be validated
        if (error.includes("Country")) newErrors.country = error;
      });

      setErrors(newErrors);
      setSuccessMessage(null);
    }
  };
  const handleCountryChange = (
    selectedOption: { value: string; label: string } | null,
  ) => {
    const selectedCountry = countries.find(
      (country: Country) => country.code === selectedOption.value,
    ) || { code: "", name: "" };
    if (selectedOption) {
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
        <label htmlFor="age" className="mb-2 text-lg font-medium text-gray-800">
          Age
        </label>
        <input
          id="age"
          name="age"
          type="number"
          ref={ageRef}
          className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your age"
        />
        {errors.age && <div className="form-error">{errors.age}</div>}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="mb-2 text-lg font-medium text-gray-800"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          ref={emailRef}
          className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
        />
        {errors.email && <div className="form-error">{errors.email}</div>}
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
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && (
          <div className="form-error text-red-600">
            {errors.confirmPassword}
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="gender"
          className="mb-2 text-lg font-medium text-gray-800"
        >
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          ref={genderRef}
          className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Gender</option>
          <option value={Gender.Male}>{Gender.Male}</option>
          <option value={Gender.Female}>{Gender.Female}</option>
          <option value={Gender.Diverses}>{Gender.Diverses}</option>
        </select>
        {errors.gender && <div className="form-error">{errors.gender}</div>}
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

      <div className="flex items-center gap-6">
        <label htmlFor="terms" className="text-lg font-medium text-gray-800">
          Accept Terms and Conditions
        </label>
        <input
          id="terms"
          name="terms"
          type="checkbox"
          ref={termsRef}
          className={`w-3 scale-150 transform ${errors.terms ? "border-red-500" : ""}`}
        />
        {errors.terms && (
          <div className="form-error text-red-600">{errors.terms}</div>
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
          isClearable={true}
          placeholder="Select or enter country"
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
      {successMessage && (
        <div className="text-center text-green-600">{successMessage}</div>
      )}
    </form>
  );
};
