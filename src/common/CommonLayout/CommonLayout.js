import { Loader } from 'components';
import { Suspense, createContext, useMemo, useState } from 'react';
import { LayoutContainer, StyledContainer } from './CommonLayout.styled';
import { Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Header } from 'common/components';
import { getTheme } from 'theme/getTheme';
import { CssBaseline } from '@mui/material';
import { globalStyles } from 'GlobalStyles';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });
export const CommonLayout = () => {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );
  const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {globalStyles}
        <CssBaseline />
        <Suspense fallback={<Loader />}>
          <StyledContainer>
            <Header />
            <LayoutContainer component="main">
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </LayoutContainer>
          </StyledContainer>
        </Suspense>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
