import { HeaderNavList } from '../HeaderNavList';
import { HeaderContainer, HeaderDivider, NavBar } from './Header.styled';

export const Header = () => {
  return (
    <NavBar position="static">
      <HeaderDivider sx={{ top: '46px' }} />
      <HeaderContainer>
        <HeaderNavList />
      </HeaderContainer>
      <HeaderDivider sx={{ bottom: 0 }} />
    </NavBar>
  );
};
