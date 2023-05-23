import { AppBar, Container } from '@mui/material';
import { styled } from '@mui/system';

export const NavBar = styled(AppBar)`
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.default};
  background-image: none;
  width: 100%;
  box-shadow: none;
  z-index: 0;

  ${({ theme }) => theme.breakpoints.up('md')} {
    z-index: 1;
    box-shadow: ${({ theme }) => theme.palette.custom.shadow.primary};
  }
`;

export const HeaderContainer = styled(Container)`
  padding-top: 12px;
  padding-bottom: 12px;

  margin: 0 auto;
  color: ${({ theme }) => theme.palette.custom.text.primary};
  min-width: ${({ theme }) => theme.breakpoints.values.small};
  width: 100vw;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: ${({ theme }) => theme.breakpoints.values.mobile};
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    max-width: ${({ theme }) => theme.breakpoints.values.desktop};
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    max-width: ${({ theme }) => theme.breakpoints.values.desktop};
  }
`;