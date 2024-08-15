import * as yup from "yup";

declare module "yup" {
  interface StringSchema {
    startsWithUppercase(message: string): this;
  }
}

yup.addMethod(yup.string, "startsWithUppercase", function (message: string) {
  return this.test("startsWithUppercase", message, function (value) {
    const { path, createError } = this;
    return (value && /^[A-Z]/.test(value)) || createError({ path, message });
  });
});

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .startsWithUppercase("Name must start with an uppercase letter"),
});

export default schema;
