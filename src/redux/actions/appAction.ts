import { APP_THEME } from "../constants";

export const setAppTheme = (theme: string) => {
  return {
    type: APP_THEME,
    payload: theme,
  };
};
