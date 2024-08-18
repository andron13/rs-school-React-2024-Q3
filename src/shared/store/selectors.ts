import { RootState } from "@/shared/store/store.ts";

// Селектор для получения всего uncontrolledFormData
export const selectUncontrolledFormData = (state: RootState) =>
  state.form.uncontrolledFormData;

// Селектор для получения всего controlledFormData
export const selectControlledFormData = (state: RootState) =>
  state.form.controlledFormData;

// Селектор для получения элемента из uncontrolledFormData по индексу
export const selectUncontrolledFormDataByIndex = (
  state: RootState,
  index: number,
) => state.form.uncontrolledFormData[index];

// Селектор для получения элемента из controlledFormData по индексу
export const selectControlledFormDataByIndex = (
  state: RootState,
  index: number,
) => state.form.controlledFormData[index];

// Селектор для получения последней добавленной формы из uncontrolledFormData
export const selectLastUncontrolledFormData = (state: RootState) => {
  const data = state.form.uncontrolledFormData;
  return data.length > 0 ? data[data.length - 1] : null;
};

// Селектор для получения последней добавленной формы из controlledFormData
export const selectLastControlledFormData = (state: RootState) => {
  const data = state.form.controlledFormData;
  return data.length > 0 ? data[data.length - 1] : null;
};

export const selectCountries = (state: RootState) => state.form.countries;
