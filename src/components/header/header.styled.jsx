import styled from "styled-components";

export const HeaderContainer = styled.header`
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
    margin-left: 50px;
    margin-right: 50px;
    padding: 20px;
  }

  @media screen and (max-width: 676px) {
    margin-left: 30px;
    margin-right: 30px;
    padding: 20px;
  }

  @media screen and (max-width: 600px) {
    justify-content: unset;
    padding: 20px;
  }

  @media screen and (max-width: 470px) {
    margin-left: 0;
    margin-right: 0;
    padding: 20px;
  }
`;

export const WrappContainer = styled.div`
  margin-left: auto;
`;

export const BurgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display:block;
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const BurgerMenuContainer = styled.div`
  background-color: #f8f8f8;
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '100%')};
  height: 100vh;
  width: 50%;
  z-index: 999;
  padding: 20px;
  border-radius: 20px 0 0 20px;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;

  @media screen and (max-width: 450px) {
    width: 100%;
    height: 100%;
  }
`;
//використовуємо "темпового "$" " пропа, який не буде передаватися до DOM

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background-color: inherit;
  padding: 0;
`;

export const WrappNav = styled.div`
  padding: 0 20px 0 20px;
  margin-top: 60px;
  flex: 1;

  ul {
    display: grid;
    gap: 20px;
  }

  li {
    display: block;
  }

  a {
    margin-left: 0;
    font-size: 24px;
  }
`;

export const WrappUserMenu = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 20px 20px 20px;
`;