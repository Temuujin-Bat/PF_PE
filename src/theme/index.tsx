import { FC } from 'react';
import {
  createTheme, CssBaseline, PaletteMode, StyledEngineProvider, ThemeProvider,
} from '@mui/material';

import ComponentsOverrides from './overrides';
import { TThemeConfig } from './type';

const ThemeConfig: FC<TThemeConfig> = ({ children }) => {
  const baseFontSize = 18;

  const themeOptions = {
    palette: { mode: 'light' as PaletteMode },
    typography:{htmlFontSize: baseFontSize}
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
