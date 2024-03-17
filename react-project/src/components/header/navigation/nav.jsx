import { useAuth } from '../../../hooks/userHook';
import {
  WrappNav,
  TitleHomeNav,
  TitleTeacherNav,
  TitleFavoriteNav,
} from './nav.styled';

const Navigation = () => {
  const { isLoggIn } = useAuth();

  return (
    <nav>
      <WrappNav>
        <li>
          <TitleHomeNav to="/">Home</TitleHomeNav>
        </li>
        <li>
          <TitleTeacherNav to="/teachers">Teachers</TitleTeacherNav>
        </li>
        {isLoggIn && (
          <li>
            <TitleFavoriteNav to="/favorite">Favorite</TitleFavoriteNav>
          </li>
        )}
      </WrappNav>
    </nav>
  );
};

export default Navigation;
