import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Wrapp = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const IconContainer = styled.div`
  margin-right: 8px;
`;

export const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #121417;
  margin-right: 32px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: -16px;
    width: 1px;
    background-color: #121417;
  }

  &:last-child::after {
    display: none;
  }
`;