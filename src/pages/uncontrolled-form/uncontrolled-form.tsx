import { ChangeEvent, FormEvent, useRef, useState } from "react";

import { schema, validateFormData } from "@/shared/validationSchema.ts";

export const UncontrolledForm = () => {
  // refs
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);

  // states
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
  const [canSubmit, setCanSubmit] = useState<boolean>(false);

  const validateField = async (fieldName: string, value: any) => {
    try {
      await schema.validateAt(fieldName, { [fieldName]: value });
      return null; // Ошибки нет
    } catch (err) {
      return (err as Error).message; // Возвращаем сообщение об ошибке
    }
  };

  const handleInputChange = async (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    const error = await validateField(name, value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    // Проверяем, можно ли отправлять форму, валидируя все поля
    const formData = {
      name: nameRef.current?.value || "",
      age: ageRef.current?.value || "",
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || "",
      confirmPassword: confirmPasswordRef.current?.value || "",
      gender: genderRef.current?.value || "",
      terms: termsRef.current?.checked || false,
    };

    const valid = await validateFormData(formData);
    setCanSubmit(valid.valid);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (canSubmit) {
      const formData = {
        name: nameRef.current?.value,
        age: ageRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
        confirmPassword: confirmPasswordRef.current?.value,
        gender: genderRef.current?.value,
        terms: termsRef.current?.checked,
      };

      console.log("Form Data:", formData);
      console.log("Form submitted successfully!");
    } else {
      console.error("Form is invalid");
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
        <label htmlFor="age" className="mb-2 text-lg font-medium text-gray-800">
          Age
        </label>
        <input
          id="age"
          name="age"
          type="number"
          ref={ageRef}
          onChange={handleInputChange}
          className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
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
          onChange={handleInputChange}
          className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
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
          type="text"
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
          type="text"
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
          onChange={handleInputChange}
          className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <div className="form-error">{errors.gender}</div>}
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
