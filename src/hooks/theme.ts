import { useSelector, useDispatch } from "react-redux";
import { Dark, Light } from "../constants/theme";
import { setAppTheme } from "../redux/actions/appAction";
import { isDarkTheme } from "../utils/theme";

export const useTheme = () => {
  const app = useSelector((state: any) => state.app);

  const dispatch = useDispatch();

  return {
    isDark: isDarkTheme(app.theme),
    theme: app.theme,
    setDarkTheme: () => {
      dispatch(setAppTheme(Dark));
    },
    setLightTheme: () => {
      dispatch(setAppTheme(Light));
    },
  };
};
