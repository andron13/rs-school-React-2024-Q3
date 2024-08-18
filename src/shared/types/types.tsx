export enum Gender {
  Male = "male",
  Female = "female",
  Diverses = "diverses",
}

export type Country = {
  code: string;
  name: string;
};

export type CustomFormData = {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
  gender: Gender;
  image: File;
  country?: Country;
};

export interface FormDataInRedux {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  terms: boolean;
  image: string; // base64
  country?: { code: string; name: string };
  timestamp?: number | null;
}

export interface FormState {
  uncontrolledFormData: FormDataInRedux[];
  controlledFormData: FormDataInRedux[];
  countries: { code: string; name: string }[];
}
