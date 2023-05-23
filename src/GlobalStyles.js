import { GlobalStyles } from '@mui/material';

export const globalStyles = (
  <GlobalStyles
    styles={theme => ({
      body: {
        padding: 0,
        margin: 0,
        backgroundColor: theme.palette.background.default,
        overflowX: 'hidden',
        boxSizing: 'border-box',
      },
      img: {
        display: ' block',
        maxWidth: '100%',
        height: 'auto',
      },
      button: {
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        cursor: 'pointer',
      },
      a: {
        cursor: 'pointer',
      },
      'ol, ul': {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
      'h1, h2, h3, h4, h5, h6, p': {
        margin: 0,
      },
    })}
  />
);
