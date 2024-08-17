import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Country {
  code: string;
  name: string;
}

interface CountryState {
  countries: Country[];
}

const initialState: CountryState = {
  countries: [],
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountries(state, action: PayloadAction<Country[]>) {
      state.countries = action.payload;
    },
  },
});

export const { setCountries } = countrySlice.actions;
export default countrySlice.reducer;
