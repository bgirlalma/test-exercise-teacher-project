import styled from 'styled-components';

export const WrappStats = styled.div`
  width: 100%;
  padding: 40px 0;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const BorderImage = styled.img`
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 1200px) {
    left: 70%;
    transform: translate(-70%, -50%);
  }

  @media screen and (max-width: 768px) {
    position: unset;
    top: unset%;
    left: unset%;
    transform: unset;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 40px;
    background-color: #f8f8f8;
    border-radius: 30px;
    padding: 20px 48px;
  }

  @media screen and (max-width: 525px) {
    padding: 20px 38px;
  }

  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    left: 0;
  }
`;

export const ListStats = styled.li`
  display: flex;
  align-items: center;
  margin-right: 100px;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 1200px) {
    margin-right: 20px;
  }

  @media screen and (max-width: 1000px) {
    margin-right: 10px;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
  }

  @media screen and (max-width: 420px) {
    margin-right: auto;

    &:last-child {
      margin-right: auto;
    }
  }
`;

export const TitleStats = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #121417;

  &::after {
    content: '+';
    margin-left: 5px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }

  @media screen and (max-width: 1000px) {
    margin-right: 10px;
  }

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 650px) {
    font-size: 26px;
  }

  @media screen and (max-width: 525px) {
    font-size: 16px;
  }

  @media screen and (max-width: 420px) {
    font-size: 26px;
  }

  @media screen and (max-width: 350px) {
    font-size: 20px;
  }
`;

export const DescStats = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #121417;
  margin-left: 12px;
  width: 90px;

  @media screen and (max-width: 1200px) {
    width: 90px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: auto;
    margin-left: 0;
    text-align: center;
  }

  @media screen and (max-width: 650px) {
    font-size: 12px;
  }

  @media screen and (max-width: 420px) {
    font-size: 16px;
  }

  @media screen and (max-width: 350px) {
    font-size: 12px;
  }
`;
