
import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/userHook';
import {
  WrappNav,
  TitleHomeNav,
  TitleTeacherNav,
  TitleFavoriteNav,
} from './nav.styled';
import { useLocation } from 'react-router-dom';

const Navigation = ({ handleNavLinkClick }) => {
  const { isLoggIn } = useAuth();

  //отримуємо поточний url
  const location = useLocation();

  //створюємо локальний стейт, отримуємо поточний url за допомогою localStorage.getItem('currentPath'). Якщо значення === null, використовуємо location.pathname
  const [, setCurrentPath] = useState(() => {
    return localStorage.getItem('currentPath') || location.pathname;
  });

  //оновлюємо currentPath та зберігаємо його в локальному сховищі
  const updateCurrentPath = path => {
    setCurrentPath(path);
    localStorage.setItem('currentPath', path);
  };

  useEffect(() => {
    const handleLocationChange = () => {
      updateCurrentPath(location.pathname);
    };

    //реєструємо слухача подій при кліку на іншу сторінку
    window.addEventListener('popstate', handleLocationChange);


    //видаляємо слухача подій 
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, [location.pathname]);

  return (
    <nav>
      <WrappNav>
        <li>
          <TitleHomeNav
            to="/"
            onClick={() => handleNavLinkClick && handleNavLinkClick('/')}
          >
            Home
          </TitleHomeNav>
        </li>
        <li>
          <TitleTeacherNav
            to="/teachers"
            onClick={() =>
              handleNavLinkClick && handleNavLinkClick('/teachers')
            }
          >
            Teachers
          </TitleTeacherNav>
        </li>
        {isLoggIn && (
          <li>
            <TitleFavoriteNav
              to="/favorite"
              onClick={() =>
                handleNavLinkClick && handleNavLinkClick('favorites')
              }
            >
              Favorite
            </TitleFavoriteNav>
          </li>
        )}
      </WrappNav>
    </nav>
  );
};

export default Navigation;
