import { FooterNavList } from '../FooterNavList';
import { FooterContainer, NavBar } from './Footer.styled';

export const Footer = () => {
  return (
    <NavBar>
      <FooterContainer>
        <FooterNavList />
      </FooterContainer>
    </NavBar>
  );
};
