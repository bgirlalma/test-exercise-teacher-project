import { useAuth } from '../../hooks/userHook';
import UserMenu from '../useMenu/userMenu';
import UserNavButton from './button/userNavButton';
import Logo from './logo/logo';
import Navigation from './navigation/nav';
import {HeaderContainer, WrappContainer, BurgerMenu, BurgerMenuContainer, CloseButton, WrappNav, WrappUserMenu} from './header.styled'
import { RxHamburgerMenu } from 'react-icons/rx';
import React, { useEffect, useState } from 'react';
import { CloseSvg } from '../image/close';
import {useNavigate } from 'react-router-dom'


const Header = () => {
  const { isLoggIn } = useAuth();
  
//навігація для бургер меню
  const navigate = useNavigate()

  // state відкриття та закриття burger menu
  const [menuOpen, setMenuOpen] = useState(false);

  //отримуємо поточний розмір екрана
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // слідкуємо за змінною розміру екрану та перевіряємо, що якщо ширина екрана більше за 600, то меню зникає, якшо менша, то з'являється
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 600 && menuOpen) {
        setMenuOpen(false); // Закрыть меню, если ширина больше 600px
      }
    };
    //додаємо слухача подій
    window.addEventListener('resize', handleResize);

    //видаляємо слухача подій. Буде викликатися при размонтуванні компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);


  //змінна для перенаправлення користувача на сторінку при кліку по навігації в бургер меню
  const handleNavLinkClick = path => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo />

      <WrappContainer>
        <BurgerMenu>
          <RxHamburgerMenu onClick={toggleMenu} />
        </BurgerMenu>
        {menuOpen && (
          <BurgerMenuContainer $isOpen={menuOpen}>
            <CloseButton onClick={() => setMenuOpen(false)}>
              <CloseSvg />
            </CloseButton>

            <WrappNav>
              <Navigation handleNavLinkClick={handleNavLinkClick} />
            </WrappNav>

            <WrappUserMenu>
              {!isLoggIn ? <UserNavButton /> : <UserMenu />}
            </WrappUserMenu>
          </BurgerMenuContainer>
        )}
      </WrappContainer>

      {!menuOpen && windowWidth > 600 && <Navigation />}
      {!menuOpen && windowWidth > 600 && (
        <>{!isLoggIn ? <UserNavButton /> : <UserMenu />}</>
      )}
    </HeaderContainer>
  );
};

export default Header;
