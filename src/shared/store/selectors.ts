import { RootState } from "./store";

export const selectUncontrolledFormData = (state: RootState) =>
  state.form.uncontrolledFormData;
export const selectControlledFormData = (state: RootState) =>
  state.form.controlledFormData;

export const selectUncontrolledImage = (state: RootState) =>
  state.form.uncontrolledFormData?.image || "";
export const selectControlledImage = (state: RootState) =>
  state.form.controlledFormData?.image || "";

export const selectCountries = (state: RootState) => state.form.countries;
