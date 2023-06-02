import { styled } from '@mui/system';
import { Container } from '@mui/material';

export const NavBar = styled('footer')`
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.dark};
  background-image: none;
  width: 100%;
  box-shadow: none;
  z-index: 0;
  position: relative;

  ${({ theme }) => theme.breakpoints.up('md')} {
    z-index: 1;
    // box-shadow: ${({ theme }) => theme.palette.custom.shadow.primary};
  }
`;
export const FooterContainer = styled(Container)`
  padding-top: 24px;
  padding-bottom: 24px;
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
