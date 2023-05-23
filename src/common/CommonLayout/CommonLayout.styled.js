import { Container } from '@mui/material';
import { styled } from '@mui/system';

export const StyledContainer = styled('div')`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export const LayoutContainer = styled(Container)`
  color: ${({ theme }) => theme.palette.text.primary};

  min-width: ${({ theme }) => theme.breakpoints.values.small};
  margin: 0;
  width: 100vw;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoints.values.mobile};
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    max-width: ${({ theme }) => theme.breakpoints.values.desktop};
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    max-width: ${({ theme }) => theme.breakpoints.values.desktop};
  }
`;
