import React, { useContext, useEffect, useState } from "react";
import { createTheme } from "react-native-whirlwind";
import { fonts } from "../constants/fonts";

// update view port width and height when design changed
const VIEWPORT_HEIGHT = 962;
const VIEWPORT_WIDTH = 428;

// calculate responsive values for screen sizes based on design viewport

const wPercent = (v) => `${(v * 100) / VIEWPORT_WIDTH}%`;
const hPercent = (v) => `${(v * 100) / VIEWPORT_HEIGHT}%`;

export { wPercent, hPercent };

import {
  ERROR,
  ERROR_DARK,
  GRAY_100,
  GRAY_200,
  GRAY_300,
  GRAY_400,
  GRAY_500,
  GRAY_600,
  GRAY_700,
  GRAY_800,
  INFO,
  INFO_CONTRAST,
  INFO_DARK,
  INFO_LIGHT,
  PRIMARY,
  PRIMARY_CONTRAST,
  SECONDARY_LIGHT,
  WARNING,
} from "../constants/colors";

// whirlwind theme provider
const t = createTheme({
  colors: {
    infoDark: INFO_DARK,
    info: INFO,
    infoLight: INFO_LIGHT,
    infoContrast: INFO_CONTRAST,
    secondaryLight: SECONDARY_LIGHT,
    warning: WARNING,
    primaryDark: PRIMARY,
    primary: PRIMARY,
    primaryContrast: PRIMARY_CONTRAST,
    errorDark: ERROR_DARK,
    gray100: GRAY_100,
    gray200: GRAY_200,
    gray300: GRAY_300,
    gray400: GRAY_400,
    gray500: GRAY_500,
    gray600: GRAY_600,
    gray700: GRAY_700,
    gray800: GRAY_800,
    error: ERROR,
  },
  fontFamilies: {
    sans: fonts.Regular,
    sansMedium: fonts.Medium,
    sansBold: fonts.Bold,
  },
});

export default t;

type ThemesType = {
  primaryColor: string;
  fontColor: string;
  subtitleTextColor: string;
  captionTextColor: string;
  screenBg: string;
  sectionContainerBg: string;
  gray800Color: string;
  gray500Color: string;
  idleColor: string;
  transparent: string;
};

type DisableOutlineStyle = {
  elevation: 0;
  shadowOpacity: 0;
  borderBottomWidth: 0;
};

export const disableOutlineStyle: DisableOutlineStyle = {
  elevation: 0,
  shadowOpacity: 0,
  borderBottomWidth: 0,
};

export const themes = {
  light: {
    primaryColor: "#8D4ED5",
    fontColor: "#000000",
    subtitleTextColor: GRAY_500,
    captionTextColor: "#000000",
    screenBg: "#FFFFFF",
    sectionContainerBg: "#FCFCFC",
    gray800Color: GRAY_800,
    gray500Color: GRAY_500,
    idleColor: "#C4C4C4",
    transparent: "transparent",
  },
  dark: {
    primaryColor: "#8D4ED5",
    fontColor: "#FFFFFF",
    subtitleTextColor: "#A3A6B5",
    captionTextColor: "#A3A6B5",
    screenBg: "#040e16",
    sectionContainerBg: "#292C3B",
    gray800Color: "#FFFFFF",
    gray500Color: "#A3A6B5",
    idleColor: "#5F6582",
    transparent: "transparent",
  },
};

type ThemeContextType = {
  currentTheme: ThemesType;
  toggleTheme: () => void;
  themeMode: "dark" | "light";
};

export const ThemeContext = React.createContext<ThemeContextType>({
  currentTheme: themes.light,
  toggleTheme: () => {},
  themeMode: "light",
});

export const useTheme = () => useContext(ThemeContext).currentTheme;

export const ThemeContextProvider = (props) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [theme, setTheme] = useState(themes.dark);

  const toggleHandler = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setTheme(mode === "dark" ? themes.dark : themes.light);
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        toggleTheme: toggleHandler,
        themeMode: mode,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
