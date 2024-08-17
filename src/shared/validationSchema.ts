import * as yup from "yup";

import { CustomFormData, Gender } from "@/shared/types";

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

// image start
const MAX_FILE_SIZE: number = 5 * 1024 * 1024; // 5 MB
const validFileTypes = ["image/jpeg", "image/png"];

function isValidFileType(fileType: string) {
  return validFileTypes.includes(fileType);
}
// image end

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
  image: yup
    .mixed()
    .required("Image is required")
    .test("is-valid-type", "Image is not a valid image type", (value) => {
      if (value && (value as File).type) {
        return isValidFileType((value as File).type);
      }
      return false;
    })
    .test("is-valid-size", "Image max allowed size is 5MB", (value) => {
      if (value && (value as File).size) {
        return (value as File).size <= MAX_FILE_SIZE;
      }
      return false;
    }),
});

export const validateFormData = async (data: CustomFormData) => {
  try {
    await schema.validate(data, { abortEarly: false });
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
