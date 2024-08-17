import * as yup from "yup";

import { Gender } from "@/shared/types";

const isFirstLetterUppercase = (value: string) =>
  value.length > 0 && value[0] === value[0].toUpperCase();

const passwordStrengthTest = (value: string) => {
  const hasNumber = /\d/;
  const hasUppercase = /[A-Z]/;
  const hasLowercase = /[a-z]/;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
  return (
    hasNumber.test(value) &&
    hasUppercase.test(value) &&
    hasLowercase.test(value) &&
    hasSpecialChar.test(value)
  );
};

export const schema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .test(
      "is-first-letter-uppercase",
      "Name must start with an uppercase letter",
      isFirstLetterUppercase,
    ),
  age: yup
    .number()
    .required("Age is required")
    .positive("Age needs to be positive")
    .integer("Age needs to be an integer"),
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Email must be a valid email address"),
  gender: yup
    .string()
    .required("Gender is required")
    .oneOf(
      Object.values(Gender),
      `Please select a valid Gender: ${Gender.Male}, ${Gender.Female}, ${Gender.Diverses}`,
    ),
  password: yup
    .string()
    .required("Password is required")
    .test(
      "password-strength",
      "Password must include at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character",
      passwordStrengthTest,
    ),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  terms: yup
    .boolean()
    .oneOf([true], "You must accept the terms")
    .required("You must accept the terms"),
});

export const validateFormData = async (data: {
  name: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}) => {
  // console.log("Validating form data:", data);
  try {
    await schema.validate(data, { abortEarly: false });
    // console.log("Form data is valid");
    return { valid: true, errors: [] };
  } catch (validationError) {
    if (validationError instanceof yup.ValidationError) {
      console.error("Validation errors:", validationError.errors);
      return { valid: false, errors: validationError.errors };
    }
    console.error("Unexpected validation error:", validationError);
    return { valid: false, errors: ["An unexpected error occurred"] };
  }
};
