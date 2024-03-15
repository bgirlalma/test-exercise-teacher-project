import styled from 'styled-components';

export const WrappStats = styled.div`
  width: 100%;
  padding: 40px 0 40px 0;
  position: relative;

  @media screen and (min-width: 320px) {
   width: 100%;
    padding: 0;
  }
`;

export const BorderImage = styled.img`
  @media screen and (min-width: 320px) {
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

  @media screen and (min-width: 320px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 20px;
    position: unset;
    top: unset;
    left: unset;
    transform: unset;
  }
`;

export const ListStats = styled.li`
  display: flex;
  align-items: center;
  margin-right: 100px;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (min-width: 320px) {
    justify-content: center;
    align-items: center;
    margin-right: 0;
  }
`;

export const TitleStats = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  color: #121417;

  &::after {
    content: '+';
    margin-left: 5px;
  }

  @media screen and (min-width: 320px) {
    font-size: 18px;
  }
`;

export const DescStats = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #121417;
  margin-left: 16px;
  word-wrap: break-word;
  &: nth-child(2n) {
    width: 90px;
  }

  @media screen and (min-width: 320px) {
    margin-left: 10px;
    display: flex;
    width: 100%;

    &: nth-child(2n) {
      width: unset;
    }
  }
`;
