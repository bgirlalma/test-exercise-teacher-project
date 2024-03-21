import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1330px) {
    margin-bottom: 15px;
    justify-content: space-between;
  }
`;

export const Wrapp = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  @media screen and (max-width: 1330px) {
    margin-bottom: 0;
  }
`;

export const IconContainer = styled.div`
  margin-right: 8px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #121417;

  position: relative;
  margin-right: 32px;

  &:not(:last-child) {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: -16px;
      width: 1px;
      background-color: #121417;
    }
  }

  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }

  @media screen and (max-width: 970px) {
    font-size: 12px;
    margin-right: 22px;
    &::after {
      right: -11px;
      width: 1px;
    }
  }

  @media screen and (max-width: 830px) {
    font-size: 10px;
  }

  @media screen and (max-width: 768px) {
   display: none;
  }
`;

export const HeartContainer = styled.button`
  margin-left: 64px;
  border: none;
  background-color: inherit;
  cursor: pointer;
  padding: 0;

  @media screen and (max-width: 1330px) {
    margin-left: 10px;
  }
`;

export const HeartYellowContainer = styled.button`
  margin-left: 64px;
  border: none;
  background-color: inherit;
  cursor: pointer;
  padding: 0;

  @media screen and (max-width: 1330px) {
    margin-left: 10px;
  }
`;