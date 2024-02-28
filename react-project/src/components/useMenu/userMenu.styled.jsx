import styled from "styled-components";


export const LogoutContainer = styled.div`
display: flex;
align-items: center;
`;


export const TitleLogout = styled.h2`
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 125%;
color: #121417;
margin-right: 40px;
`;

export const SpanLogout = styled.span`
  font-size: 16px;
  line-height: 125%;
  color: #9fbaae;
`;


export const ButtonLogout = styled.button`
  transition: 0.3s ease-in-out;
  border: none;
  border-radius: 20px;
  background-color: #9fbaae;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #fff;

  &:hover {
    background-color: #1f8d9c;
    color: #dfeb09;
  }
`;