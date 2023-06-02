import { Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link, NavLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const FooterNav = styled('nav')`
  display: flex;
  flex-direction: column-reverse;

  ${({ theme }) => theme.breakpoints.up('lg')} {
    flex-direction: row;
  }
`;

export const NavWrap = styled('div')`
  display: flex;
`;

export const FooterTitle = styled(Typography)`
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.palette.custom.text.secondary};
`;

export const NavList = styled('ul')``;

export const NavItem = styled('li')`
  margin-bottom: 2px;
`;

export const FooterNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.custom.text.secondary};
  padding: 2px 0;
  transition: all 500ms ${({ theme }) => theme.transitions.easing.easeOut};

  &.active,
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.custom.background.accentSecondary};
  }
`;

export const FormWrap = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`;

export const SocialWrap = styled('ul')`
  min-width: 340px;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;

export const SubscribeDesc = styled(Typography)`
  color: ${({ theme }) => theme.palette.custom.text.secondary};
  font-weight: 500;
  margin-bottom: 12px;
`;

export const Logo = styled(NavLink)`
  display: block;
  min-width: 120px;
  padding-right: 16px;
`;

export const LogoImg = styled('img')``;

export const SocialTextField = styled(TextField)`
  cursor: pointer;
  &
    > .css-1m2h5ah-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.custom.background.accent};
  }

  & label.Mui-focused {
    color: ${({ theme }) => theme.palette.custom.background.accent};
  }
  margin-bottom: 8px;
`;

export const SocialButton = styled(Button)`
  transition: all 500ms ${({ theme }) => theme.transitions.easing.easeOut};
  color: ${({ theme }) => theme.palette.custom.background.accent};
  background-color: #000000;
  padding: 14px 12px;
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.custom.text.light};
    background-color: ${({ theme }) => theme.palette.custom.background.accent};
  }
`;

export const SocialList = styled('ul')`
  display: flex;
  justify-content: space-around;
`;

export const SocialItem = styled('li')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  // color: ${({ theme }) => theme.palette.common.white};
  color: ${({ theme }) => theme.palette.custom.background.accentSecondary};
  transition: all 250ms ${({ theme }) => theme.transitions.easing.easeOut};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.custom.background.accent};
  }
`;

export const IconFacebook = styled(FacebookIcon)`
  width: 32px;
  height: auto;
  fill: currentColor;
  transition: all 250ms ${({ theme }) => theme.transitions.easing.easeOut};
`;

export const IconInstagram = styled(InstagramIcon)`
  width: 32px;
  height: auto;
  fill: currentColor;
  transition: all 250ms ${({ theme }) => theme.transitions.easing.easeOut};
`;

export const IconLinkedIn = styled(LinkedInIcon)`
  width: 32px;
  height: auto;
  fill: currentColor;
  transition: all 250ms ${({ theme }) => theme.transitions.easing.easeOut};
`;
