import { styled } from '@mui/system';

export const LoaderContainer = styled('div')`
  display: flex;
  justify-content: center;
  padding: 60px 0;
  color: ${({ theme }) => theme.palette.custom.text.accent};
`;
