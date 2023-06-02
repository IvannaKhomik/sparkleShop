export const getTheme = mode => ({
  typography: {
    allVariants: {
      fontFamily: 'serif',
      textTransform: 'none',
      fontSize: 16,
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 768,
      lmd: 1024,
      lg: 1280,
      small: '320px',
      mobile: '480px',
      tablet: '768px',
      bigTablet: '1040px',
      desktop: '1280px',
    },
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          custom: {
            background: {
              accent: '#ff9900',
              paper: '#ffffff',
              secondary: '#ece5e5',
              active: '#ece5e5',
              accentSecondary: '#cc994b',
              dark: '#fcd34d',
            },
            shadow: {
              primary:
                '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
            },
            text: {
              primary: '#5b5b5b',
              accent: '#ff9a03',
              secondary: '#0f172a',
              light: '#ffffff',
            },
          },
        }
      : {
          // palette values for dark mode
          custom: {
            background: {
              accent: '#ff9900',
              paper: '#ffffff',
              secondary: '#121212',
              active: '#000000',
              accentSecondary: '#cc994b',
              dark: '#fcd34d',
            },
            shadow: {
              primary:
                '0px 2px 4px -1px rgba(255,255,255,0.2), 0px 4px 5px 0px rgba(255,255,255,0.14), 0px 1px 10px 0px rgba(255,255,255,0.12)',
            },
            text: {
              primary: '#ffffff',
              accent: '#ff9a03',
              secondary: '#ffffff',
              light: '#ffffff',
            },
          },
        }),
  },
});
