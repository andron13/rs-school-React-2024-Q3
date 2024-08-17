export enum Gender {
  Male = "male",
  Female = "female",
  Diverses = "diverses",
}
export type Country = {
  code: string;
  name: string;
};

export type UncontrolledFormData = {
  name: string;
  age?: number;
  email?: string;
  password?: string;
  confirmPassword?: string;
  terms?: boolean;
  gender?: Gender;
  image?: File;
  country: Country;
};
