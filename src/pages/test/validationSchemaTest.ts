import * as yup from "yup";

import { Country, UncontrolledFormData } from "@/shared/types";

// image start

const MAX_FILE_SIZE: number = 5 * 1024 * 1024; // 5 MB
const validFileTypes = ["image/jpeg", "image/png"];

function isValidFileType(fileType: string) {
  return validFileTypes.includes(fileType);
}

// image end

const isFirstLetterUppercase = (value: string) =>
  value.length > 0 && value[0] === value[0].toUpperCase();

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

export const validateFormData = async (data: UncontrolledFormData) => {
  console.log("Validating form data:", data);
  try {
    await schema.validate(data, { abortEarly: false });
    console.log("Form data is valid");
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
