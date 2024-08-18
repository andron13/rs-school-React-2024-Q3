import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { countries } from "@/shared";
import { FormDataInRedux, FormState } from "@/shared/types";

const initialState: FormState = {
  uncontrolledFormData: [],
  controlledFormData: [],
  countries: countries,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addUncontrolledFormData(state, action: PayloadAction<FormDataInRedux>) {
      state.uncontrolledFormData.push(action.payload);
    },
    updateUncontrolledFormData(
      state,
      action: PayloadAction<{ index: number; data: FormDataInRedux }>,
    ) {
      state.uncontrolledFormData[action.payload.index] = action.payload.data;
    },
    addControlledFormData(state, action: PayloadAction<FormDataInRedux>) {
      state.controlledFormData.push(action.payload);
    },
    updateControlledFormData(
      state,
      action: PayloadAction<{ index: number; data: FormDataInRedux }>,
    ) {
      state.controlledFormData[action.payload.index] = action.payload.data;
    },
    setCountries(
      state,
      action: PayloadAction<{ code: string; name: string }[]>,
    ) {
      state.countries = action.payload;
    },
  },
});

export const {
  addUncontrolledFormData,
  updateUncontrolledFormData,
  addControlledFormData,
  updateControlledFormData,
  setCountries,
} = formSlice.actions;

export const formReducer = formSlice.reducer;
