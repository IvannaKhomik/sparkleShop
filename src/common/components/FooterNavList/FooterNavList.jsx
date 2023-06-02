import { FormControl, Grid, IconButton } from '@mui/material';
import logo from './../../../images/logo.png';
import { useTranslation } from 'react-i18next';
import {
  FooterNav,
  FooterTitle,
  SocialWrap,
  Logo,
  LogoImg,
  NavList,
  NavItem,
  FooterNavLink,
  SubscribeDesc,
  SocialTextField,
  SocialButton,
  NavWrap,
  FormWrap,
  SocialLink,
  IconLinkedIn,
  IconInstagram,
  IconFacebook,
  SocialItem,
  SocialList,
} from './FooterNavList.styled';
import { useLocation } from 'react-router-dom';

export const FooterNavList = () => {
  const { t } = useTranslation(['footer']);
  const location = useLocation();
  const catalogItems = [
    { label: t('kids'), link: '' },
    { label: t('babies'), link: '' },
    { label: t('shoes'), link: '' },
    { label: t('brands'), link: '' },
    { label: t('outlet'), link: '' },
  ];
  const customerServiceItems = [
    { label: t('delivery'), link: '' },
    { label: t('returns'), link: '' },
    { label: t('tracking'), link: '' },
    { label: t('contactUs'), link: '' },
  ];
  const legalAreaItems = [
    { label: t('privacyPolicy'), link: '' },
    { label: t('termsOfUse'), link: '' },
    { label: t('termsOfSale'), link: '' },
    { label: t('cokkies'), link: '' },
  ];

  const socialList = [
    { id: 1, icon: <IconFacebook />, link: '' },
    { id: 2, icon: <IconInstagram />, link: '' },
    { id: 3, icon: <IconLinkedIn />, link: '' },
  ];

  return (
    <FooterNav>
      <NavWrap>
        <Logo to="/" state={{ from: location }}>
          <LogoImg src={logo} alt="Logo image" width="218" />
        </Logo>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FooterTitle variant="h3">{t('catalog')}</FooterTitle>
            <NavList>
              {catalogItems.map(({ label, link }) => (
                <NavItem key={label}>
                  <FooterNavLink to="link" state={{ from: location }}>
                    {label}
                  </FooterNavLink>
                </NavItem>
              ))}
            </NavList>
          </Grid>
          <Grid item xs={4}>
            <FooterTitle variant="h3">{t('customer')}</FooterTitle>
            <NavList>
              {customerServiceItems.map(({ label, link }) => (
                <NavItem key={label}>
                  <FooterNavLink to="link" state={{ from: location }}>
                    {label}
                  </FooterNavLink>
                </NavItem>
              ))}
            </NavList>
          </Grid>
          <Grid item xs={4}>
            <FooterTitle variant="h3">{t('legalArea')}</FooterTitle>
            <NavList>
              {legalAreaItems.map(({ label, link }) => (
                <NavItem key={label}>
                  <FooterNavLink to="link" state={{ from: location }}>
                    {label}
                  </FooterNavLink>
                </NavItem>
              ))}
            </NavList>
          </Grid>
        </Grid>
      </NavWrap>

      <SocialWrap>
        <FormWrap>
          <FooterTitle variant="h3">{t('subscribeTo')}</FooterTitle>
          <SubscribeDesc>{t('getSales')}</SubscribeDesc>
          <FormControl>
            <SocialTextField
              type="email"
              id="demo-helper-text-misaligned-no-helper"
              label={t('enterEmail')}
              required
              minLength="4"
            />
            <SocialButton type="submit">{t('subscribe')}</SocialButton>
          </FormControl>
        </FormWrap>
        <SocialList>
          {socialList.map(({ id, icon, link }) => (
            <SocialItem key={id}>
              <IconButton
                component={SocialLink}
                href={link}
                sx={{ marginRight: '16px' }}
                color="inherit"
                target="_blank"
                underline="none"
                rel="noopener"
              >
                {icon}
              </IconButton>
            </SocialItem>
          ))}
        </SocialList>
      </SocialWrap>
    </FooterNav>
  );
};
