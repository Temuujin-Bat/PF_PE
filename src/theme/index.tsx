import { FC } from "react";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

import ComponentsOverrides from "./overrides";
import { TThemeConfig } from "./type";

const ThemeConfig: FC<TThemeConfig> = ({ children }) => {
  const themeOptions = {
    palette: { mode: "dark" as PaletteMode },
    typography: {
      allVariants: {
        color: "rgba(255, 255, 255, .8)",
        fontFamily: "Roboto, sans-serif",
        fontSize: 16,
      },
    },
  };

  const theme = createTheme(themeOptions);

  theme.components = ComponentsOverrides();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeConfig;
