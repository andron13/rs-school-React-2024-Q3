import { ChangeEvent, FormEvent, useRef, useState } from "react";

import { TextInput } from "@/entities";

export const UncontrolledForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  // Список стран (обычно загружается из API или хранится в Redux)
  const countries = ["Germany", "France", "USA", "Canada", "Australia"];

  const handleFileChange = () => {
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCountryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
      gender: genderRef.current?.value,
      terms: termsRef.current?.checked,
      image: imagePreview,
      country: selectedCountry,
    };

    console.log("Form Data:", formData);
    console.log("Form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg space-y-6 rounded-lg bg-white p-8 shadow-lg"
    >
      <div className="text-center text-2xl font-bold text-blue-600">
        Join Us
      </div>

      <TextInput
        label="Name"
        type="text"
        ref={nameRef}
        required
        placeholder="Enter your name"
      />

      <div className="flex flex-col">
        <label htmlFor="age" className="mb-2 text-lg font-medium text-gray-800">
          Age
        </label>
        <input
          id="age"
          type="number"
          ref={ageRef}
          className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          placeholder="Enter your age"
        />
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
          type="email"
          ref={emailRef}
          className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          placeholder="Enter your email"
        />
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
          type="password"
          ref={passwordRef}
          className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          placeholder="Enter your password"
        />
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
          type="password"
          ref={confirmPasswordRef}
          className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          placeholder="Confirm your password"
        />
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
          ref={genderRef}
          className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="fileUpload"
          className="mb-2 text-lg font-medium text-gray-800"
        >
          Upload Picture
        </label>
        <input
          id="fileUpload"
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/png, image/jpeg"
          className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {imagePreview && (
          <div className="mt-4">
            <img
              src={imagePreview}
              alt="Preview"
              className="h-32 w-32 rounded-lg object-cover shadow-md"
            />
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="country"
          className="mb-2 text-lg font-medium text-gray-800"
        >
          Country
        </label>
        <input
          id="country"
          list="country-list"
          ref={countryRef}
          value={selectedCountry}
          onChange={handleCountryChange}
          className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          placeholder="Select your country"
        />
        <datalist id="country-list">
          {countries.map((country) => (
            <option key={country} value={country} />
          ))}
        </datalist>
      </div>

      <div className="flex items-center">
        <input
          id="terms"
          type="checkbox"
          ref={termsRef}
          required
          className="mr-2"
        />
        <label htmlFor="terms" className="text-lg font-medium text-gray-800">
          Accept Terms and Conditions
        </label>
      </div>

      <div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 text-white shadow-md transition duration-300 hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
