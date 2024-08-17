import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { countries } from "@/shared";
import { FormDataInRedux, FormState } from "@/shared/types";

const initialState: FormState = {
  uncontrolledFormData: null,
  controlledFormData: null,
  countries: countries,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setUncontrolledFormData(state, action: PayloadAction<FormDataInRedux>) {
      state.uncontrolledFormData = action.payload;
    },
    setControlledFormData(state, action: PayloadAction<FormDataInRedux>) {
      state.controlledFormData = action.payload;
    },
    setCountries(
      state,
      action: PayloadAction<{ code: string; name: string }[]>,
    ) {
      state.countries = action.payload;
    },
  },
});

export const { setUncontrolledFormData, setControlledFormData, setCountries } =
  formSlice.actions;
export const formReducer = formSlice.reducer;
