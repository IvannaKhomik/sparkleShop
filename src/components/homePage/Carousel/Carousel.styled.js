import { CCarouselCaption } from '@coreui/react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const SliderCaption = styled(CCarouselCaption)`
  width: 400px;
  height: 180px;
  top: 96px;
  left: 50%;
  padding-left: 12px;
  padding-right: 12px;
  font-weight: 300;
  font-size: 20px;
  color: ${({ theme }) => theme.palette.custom.text.primary};
  border: 0px solid ${({ theme }) => theme.palette.custom.text.primary};
  border-radius: 2%;
  background-color: rgb(243, 245, 195);
  opacity: 0.6;
  box-shadow: 5px 5px 10px 0 ${({ theme }) => theme.palette.custom.text.primary};
`;

export const CaptionDesc = styled(Typography)`
  &.MuiTypography-root {
    display: block;
    color: #000;
    font-size: 22px;
  }
`;

export const Quotes = styled('span')`
  display: block;
  position: absolute;
  font-size: 56px;
  top: -12px;
  color: ${({ theme }) => theme.palette.custom.text.accent};
`;
