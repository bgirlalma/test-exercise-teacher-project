import { useAuth } from '../../hooks/userHook';
import UserMenu from '../useMenu/userMenu';
import UserNavButton from './button/userNavButton';
import Logo from './logo/logo';
import Navigation from './navigation/nav';
import styled from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx';
import React, { useEffect, useState } from 'react';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 128px;
  margin-right: 128px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 900px) {
    margin-left: 100px;
    margin-right: 100px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 70px;
    margin-right: 70px;
  }

  @media screen and (max-width: 676px) {
    margin-left: 50px;
    margin-right: 50px;
  }
`;

const BurgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: inline-block;
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;



const Header = () => {

  const { isLoggIn } = useAuth();

  // state відкриття та закриття burger menu
  const [menuOpen, setMenuOpen] = useState(false);

  //отримуємо поточний розмір екрана
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  useEffect(() => {
    // слидкуємо за змінною розміру екрану та перевіряємо, що якщо ширина екрана більше за 600, то меню зникає, якшо менша, то з'являється
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

  return (
    <HeaderContainer>
      <Logo />
      <BurgerMenu>
        <RxHamburgerMenu onClick={toggleMenu} />
        {menuOpen && (
          <div>
            <Navigation />
            {!isLoggIn ? <UserNavButton /> : <UserMenu />}
          </div>
        )}
      </BurgerMenu>
      {!menuOpen && windowWidth > 600 && <Navigation />}
      {!menuOpen && windowWidth > 600 && (
        <>{!isLoggIn ? <UserNavButton /> : <UserMenu />}</>
      )}
    </HeaderContainer>
  );
};

export default Header;
