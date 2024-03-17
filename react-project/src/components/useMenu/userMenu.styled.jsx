import styled from "styled-components";


export const LogoutContainer = styled.div`
display: flex;
align-items: center;
`;


export const TitleLogout = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 125%;
  color: #121417;
  margin-right: 40px;

  @media screen and (max-width: 900px) {
    font-size: 16px;
    margin-right: 30px;
  }
`;


export const ButtonLogout = styled.button`
  transition: 0.3s ease-in-out;
  border: none;
  border-radius: 5px;
  background-color: #9fbaae;
  height: 40px;
  padding: 10px 15px;
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

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
`;