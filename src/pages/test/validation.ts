import * as yup from "yup";

const isFirstLetterUppercase = (value: string) =>
  value.length > 0 && value[0] === value[0].toUpperCase();

const validationMessages = {
  name: {
    uppercase: "Name must start with an uppercase letter",
    required: "Name is required",
  },
};

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .required(validationMessages.name.required)
    .test(
      "is-first-letter-uppercase",
      validationMessages.name.uppercase,
      (value) => isFirstLetterUppercase(value || ""),
    ),
});

export const validateFormData = async (data: { name: string }) => {
  try {
    await schema.validate(data, { abortEarly: false });
    return { valid: true, errors: [] };
  } catch (validationError) {
    if (validationError instanceof yup.ValidationError) {
      return { valid: false, errors: validationError.errors };
    }
    console.error("Unexpected validation error:", validationError);
    return { valid: false, errors: ["An unexpected error occurred"] };
  }
};
