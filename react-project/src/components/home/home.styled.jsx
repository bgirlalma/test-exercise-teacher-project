import styled from 'styled-components';

export const WrappHomeContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  gap: 25px;

  @media screen and (max-width: 1300px) {
    gap: 20px;
  }

  @media screen and (max-width: 350px) {
  display: flex;
  }
`;

export const TitleContainer = styled.div`
  background-color: #f8f8f8;
  border-radius: 30px;

  padding: 98px 64px 98px 64px;

  @media screen and (max-width: 1300px) {
    width: 500px;
    padding: 80px 40px 80px 40px;
  }

  @media screen and (max-width: 1000px) {
    width: 400px;
    padding: 60px 30px 60px 30px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 48px;
  }

  @media screen and (max-width: 525px) {
    width: 100%;
    padding: 48px 38px;
  }

  @media screen and (max-width: 350px) {
    width: 100%;
    padding: 48px 28px;
  }
`;

export const HomeTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 48px;
  color: #121417;
  margin-bottom: 32px;

  @media screen and (max-width: 1200px) {
    font-size: 38px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 28px;
  }

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }

  @media screen and (max-width: 420px) {
    font-size: 38px;
  }

  @media screen and (max-width: 350px) {
    font-size: 28px;
  }
`;

export const TitleSpan = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-style: italic;
  font-size: 48px;
  background-color: #9fbaae;
  border-radius: 5px;

  @media screen and (max-width: 1200px) {
    font-size: 38px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 28px;
  }

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }

  @media screen and (max-width: 420px) {
    font-size: 38px;
  }

  @media screen and (max-width: 350px) {

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

  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }

  @media screen and (max-width: 1000px) {
    width: 300px;
    font-size: 10px;
  }

  @media screen and (max-width: 768px) {
    width: auto;
    font-size: 20px;
  }

  @media screen and (max-width: 420px) {
    font-size: 18px;
  }

  @media screen and (max-width: 350px) {
    font-size: 16px;

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

  @media screen and (max-width: 768px) {
    width: 200px;
  }

  @media screen and (max-width: 420px) {
   width: 150px;
  }
`;

export const StyledPhoto = styled.img`
  width: 568px;
  height: auto;
  @media screen and (max-width: 1300px) {
    width: 500px;
  }

  @media screen and (max-width: 1200px) {
    width: 400px;
  }

  @media screen and (max-width: 1000px) {
    width: 300px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

