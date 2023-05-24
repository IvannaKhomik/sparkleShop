import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from './../../../images/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import {
  Cart,
  CartIcon,
  HeaderBtn,
  HeaderNav,
  IconBadge,
  Logo,
  LogoImg,
  Nav,
  NavBar,
  NavItem,
  SocialNav,
  SocialNavItem,
  StyledIcon,
  StyledLink,
  StyledSocialLink,
  SwitchBar,
  SwitchLanguages,
} from './HeaderNavList.styled';
import i18n from 'utils/i18n';

export const HeaderNavList = () => {
  useEffect(() => {
    i18n.changeLanguage('ua');
  }, []);

  const location = useLocation();
  const langs = { en: { nativeName: 'EN' }, ua: { nativeName: 'UA' } };
  const { t } = useTranslation(['common']);

  const homePage = t('aboutUs');
  const onlineShop = t('onlineShop');
  const collectionsPage = t('collections');
  const contactsPage = t('contacts');

  const items = [
    { page: homePage, link: '/' },
    { page: onlineShop, link: '/online-shop' },
    { page: collectionsPage, link: '/collections' },
    { page: contactsPage, link: '/contacts' },
  ];

  const socials = [
    {
      link: 'https://www.instagram.com/',
      icon: <InstagramIcon fontSize="large" sx={{ fill: 'currentcolor' }} />,
      label: 'instagram',
    },
    {
      link: 'https://uk-ua.facebook.com/',
      icon: <FacebookIcon fontSize="large" />,
      label: 'facebook',
    },
  ];

  return (
    <HeaderNav>
      <SwitchBar>
        <SwitchLanguages>
          {Object.keys(langs).map(lang => (
            <HeaderBtn
              type="submit"
              key={lang}
              onClick={() => i18n.changeLanguage(lang)}
              disabled={i18n.resolvedLanguage === lang}
            >
              {langs[lang].nativeName}
            </HeaderBtn>
          ))}
        </SwitchLanguages>
        <HeaderBtn>Register &#9747; Sign In</HeaderBtn>
        <HeaderBtn sx={{ marginLeft: 'auto', padding: 0 }}>
          <Cart>
            <IconBadge badgeContent={4}>
              <CartIcon color="currentColor" />
            </IconBadge>
          </Cart>
        </HeaderBtn>
      </SwitchBar>

      <NavBar disableGutters>
        <Logo to="/" state={{ from: location }}>
          <LogoImg src={logo} alt="Logo" />
        </Logo>
        <Nav>
          {items.map(({ page, link }) => (
            <NavItem key={page}>
              <StyledLink to={link} state={{ from: location }}>
                {page}
              </StyledLink>
            </NavItem>
          ))}
        </Nav>
        <SocialNav>
          {socials.map(({ link, icon, label }) => (
            <SocialNavItem key={label}>
              <StyledIcon
                component={StyledSocialLink}
                to={link}
                state={{ from: location }}
                aria-label={label}
              >
                {icon}
              </StyledIcon>
            </SocialNavItem>
          ))}
        </SocialNav>
      </NavBar>
    </HeaderNav>
  );
};
