import styled from 'styled-components';

export const WrappHomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 568px;
  gap: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 320px) {
    display: flex;
  }
`;

export const TitleContainer = styled.div`
  background-color: #f8f8f8;
  border-radius: 30px;
  padding: 98px 64px 0 64px;

  @media screen and (min-width: 320px) {
    padding: 60px 40px 20px 60px;
  }
`;

export const HomeTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 48px;
  color: #121417;
  margin-bottom: 32px;

  @media screen and (min-width: 320px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

export const TitleSpan = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-style: italic;
  font-size: 48px;
  background-color: #9fbaae;
  border-radius: 5px;

  @media screen and (min-width: 320px) {
    font-size: 28px;
  }
`;

export const HomeDesc = styled.p`
  width: 460px;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 16px;
  color: #121417;
  margin-bottom: 64px;

  @media screen and (min-width: 320px) {
    width: 320px;
    margin-bottom: 44px;
  }
`;

export const HomeButton = styled.button`
  width: 267px;
  height: 60px;
  border: none;
  border-radius: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 18px;
  background-color: #9fbaae;
  color: #121417;
  padding: 0;
  margin: 0;

  @media screen and (min-width: 320px) {
    width: 150px;
    font-size: 16px;
  }
`;

export const StyledImageGirl = styled.img`
  @media screen and (min-width: 320px) {
    display: none;
  }
`;
