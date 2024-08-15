import * as yup from "yup";

const isFirstLetterUppercase = (value: string) =>
  value.length > 0 && value[0] === value[0].toUpperCase();

const validationMessages = {
  name: {
    uppercase: "Name must start with an uppercase letter",
    required: "Name is required",
  },
};

export const schema = yup.object({
  name: yup
    .string()
    .trim()
    .required(validationMessages.name.required)
    .test(
      "is-first-letter-uppercase",
      validationMessages.name.uppercase,
      (value) => isFirstLetterUppercase(value || ""),
    ),
  age: yup.number().required("Age is required").positive().integer(),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  gender: yup.string().required("Gender is required"),
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
