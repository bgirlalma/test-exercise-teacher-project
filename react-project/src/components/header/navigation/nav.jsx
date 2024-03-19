import { useAuth } from '../../../hooks/userHook';
import {
  WrappNav,
  TitleHomeNav,
  TitleTeacherNav,
  TitleFavoriteNav,
} from './nav.styled';

const Navigation = ({ handleNavLinkClick }) => {
  const { isLoggIn } = useAuth();

  return (
    <nav>
      <WrappNav>
        <li>
          <TitleHomeNav to="/" onClick={() => handleNavLinkClick('/')}>
            Home
          </TitleHomeNav>
        </li>
        <li>
          <TitleTeacherNav to="/teachers" onClick={() => handleNavLinkClick('/teachers')}>Teachers</TitleTeacherNav>
        </li>
        {isLoggIn && (
          <li>
            <TitleFavoriteNav to="/favorite" onClick={() => handleNavLinkClick('favorites')}>Favorite</TitleFavoriteNav>
          </li>
        )}
      </WrappNav>
    </nav>
  );
};

export default Navigation;
