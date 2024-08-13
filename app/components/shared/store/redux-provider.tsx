import { Provider } from "react-redux";

import { store } from "../store/store";

import { ReduxProviderProps } from "~/components/shared/types";

export function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
