export enum Gender {
  Male = "male",
  Female = "female",
  Diverses = "diverses",
}

export type UncontrolledFormData = {
  name: string;
  age?: number;
  email?: string;
  password?: string;
  confirmPassword?: string;
  terms?: boolean;
  gender?: Gender;
  image?: File;
};
