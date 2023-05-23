import { HeaderNavList } from '../HeaderNavList';
import { HeaderContainer, NavBar } from './Header.styled';

export const Header = () => {
  return (
    <NavBar position="static">
      <HeaderContainer>
        <HeaderNavList />
      </HeaderContainer>
    </NavBar>
  );
};
