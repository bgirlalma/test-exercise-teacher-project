import styled from "styled-components";


export const ButtonWrapp = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoadMore = styled.button`
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #121417;

  width: 183px;
  height: 60px;
  border: none;
  border-radius: 12px;
  background-color: #9fbaae;
  margin-top: 64px;

  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    color: #e71a8e;
    background-color: #cbded3;
  }
`;