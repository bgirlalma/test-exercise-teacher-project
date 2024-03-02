import styled from "styled-components";

export const WrappHomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 568px;
  gap: 24px;
  margin-bottom: 24px;
`;

export const TitleContainer = styled.div`
  background-color: #f8f8f8;
  border-radius: 30px;
  padding: 98px 64px 0 64px;
`;

export const HomeTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 48px;
  color: #121417;
  margin-bottom: 32px;
`;

export const TitleSpan = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-style: italic;
  font-size: 48px;
  background-color: #9fbaae;
  border-radius: 5px;
`;

export const HomeDesc = styled.p`
  width: 460px;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 16px;
  color: #121417;
  margin-bottom: 64px;
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
`;