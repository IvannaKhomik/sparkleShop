import { Badge, IconButton, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';

export const HeaderNav = styled('nav')`
  display: flex;
  flex-direction: column;
`;

export const SwitchBar = styled('div')`
  display: flex;
  margin-bottom: 2px;
`;

export const SwitchLanguages = styled('div')`
  display: flex;
  align-items: flex-end;
  margin-right: 24px;
`;

export const HeaderBtn = styled('button')`
  padding: 8px 12px;
  border-radius: 2px;
  height: 32px;
  background-color: ${({ theme, disabled }) =>
    disabled && theme.palette.custom.background.accentSecondary};
  color: ${({ theme, disabled }) =>
    disabled ? theme.palette.custom.background.paper : theme.palette.custom.text.primary};
  font-family: 'Exo 2', 'Open Sans', sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  border: none;
  text-decoration: none;
  margin-left: 8px;
  transition: all 500ms ${({ theme }) => theme.transitions.easing.easeOut};

  &:hover,
  &:focus {
    background-color: ${({ theme, disabled }) =>
      disabled ? 'none' : theme.palette.custom.background.accentSecondary};
    color: ${({ theme, disabled }) => (disabled ? 'none' : theme.palette.custom.background.paper)};
  }
`;

export const Cart = styled('div')`
  padding: 0 12px;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.custom.background.accent};
  transition: all 500ms ${({ theme }) => theme.transitions.easing.easeOut};

  &:hover span,
  &:focus span {
    color: ${({ theme }) => theme.palette.custom.background.paper};
  }

  &:hover .MuiBadge-badge,
  &:focus .MuiBadge-badge {
    background-color: ${({ theme }) => theme.palette.custom.background.accentSecondary};
  }
`;

export const IconBadge = styled(Badge)`
  transition: all 500ms ${({ theme }) => theme.transitions.easing.easeOut};

  & .MuiBadge-badge {
    border: 1px solid currentColor;
    background-color: ${({ theme }) => theme.palette.custom.background.paper};
    transition: all 500ms ${({ theme }) => theme.transitions.easing.easeOut};
  }
`;

export const CartIcon = styled(FaShoppingBag)`
  width: 20px;
  height: 20px;
  fill: currentColor;
  transition: all 500ms ${({ theme }) => theme.transitions.easing.easeOut};
`;

export const NavBar = styled(Toolbar)`
  position: relative;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    min-height: 48px;
  }
`;

export const Logo = styled(NavLink)`
  margin-right: auto;
`;

export const LogoImg = styled('img')`
  width: 218px;
`;

export const Nav = styled('ul')`
  display: flex;
  min-width: 500px;
`;

export const NavItem = styled('li')`
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.palette.custom.text.primary};
  font-size: 18px;
  line-height: 1.25;
  padding: 12px 10px;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  text-transform: uppercase;
  border-radius: 10px;
  cursor: pointer;
  transition: all 500ms ${({ theme }) => theme.transitions.easing.easeOut};

  &.active,
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.custom.background.accentSecondary};
    color: ${({ theme }) => theme.palette.custom.background.paper};
  }
`;

export const SocialNav = styled('ul')`
  display: flex;
  margin-left: 12px;
`;
export const SocialNavItem = styled('li')``;

export const StyledSocialLink = styled(NavLink)`
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.custom.background.accentSecondary};
  }
`;

export const StyledIcon = styled(IconButton)`
  transition: all 500ms ${({ theme }) => theme.transitions.easing.easeOut};
`;
