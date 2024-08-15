import * as yup from "yup";

// Функция для проверки силы пароля
const passwordStrengthTest = (value) => {
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

// Сообщения для валидации
const validationMessages = {
  password: {
    required: "Password is required",
    strength:
      "Password must include at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character",
  },
  confirmPassword: {
    required: "Confirm Password is required",
    mismatch: "",
  },
  terms: {
    required: "You must accept the terms",
  },
};

export const schema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .test(
      "is-first-letter-uppercase",
      "Name must start with an uppercase letter",
      (value) => {
        console.log("Name value during validation:", value);
        return value && /^[A-Z]/.test(value);
      },
    ),
  password: yup
    .string()
    .required(validationMessages.password.required)
    .test("password-strength", validationMessages.password.strength, (value) =>
      passwordStrengthTest(value),
    ),
  confirmPassword: yup
    .string()
    .required(validationMessages.confirmPassword.required)
    .oneOf([yup.ref("password")], validationMessages.confirmPassword.mismatch),
  terms: yup
    .boolean()
    .oneOf([true], validationMessages.terms.required)
    .required(validationMessages.terms.required),
});

export const validateFormData = async (data: {
  name: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}) => {
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
