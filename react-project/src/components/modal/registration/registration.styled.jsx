import styled from "styled-components";
import { Form, Field } from "formik";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const FormContainer = styled.div`
  position: fixed;
  top: -100%; /* начальная позиция за пределами экрана сверху */
  left: 50%;
  transform: translateX(-50%);
  border-radius: 30px;
  max-width: 565px;
  background-color: #f8f8f8;
  padding: 64px;
  border: 1px solid #9fbaae;

  animation-name: slideInFromTop;
  animation-duration: 0.8s;
  animation-delay: 0s; /* начало анимации сразу */
  animation-fill-mode: forwards;

  @keyframes slideInFromTop {
    0% {
      top: 100%; /* начальная позиция за пределами экрана сверху */
    }
    90% {
      box-shadow: -2px 4px 27px 8px rgba(0, 0, 0, 0.65);
      -webkit-box-shadow: -2px 4px 27px 8px rgba(0, 0, 0, 0.65);
      -moz-box-shadow: -2px 4px 27px 8px rgba(0, 0, 0, 0.65);
    }
    100% {
      box-shadow: -2px 4px 27px 8px rgba(0, 0, 0, 0.65);
      -webkit-box-shadow: -2px 4px 27px 8px rgba(0, 0, 0, 0.65);
      -moz-box-shadow: -2px 4px 27px 8px rgba(0, 0, 0, 0.65);
      top: 15%; /* конечная позиция на экране по вертикали */
    }
  }
`;

export const TitleForm = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #121417;
  margin-bottom: 20px;
`;

export const DescForm = styled.p`
  width: 438px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  color: rgba(18, 20, 23, 0.8);
  margin-bottom: 40px;
`;

export const WrappForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledField = styled(Field)`
  width: calc(100% - 20px);
  height: 54px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  padding: 0 0 0 18px;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  color: #121417;
  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 40px;
  }

  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    border: 1px solid #6699cc;
  }
`;

export const ButtonModal = styled.button`
  background-color: #f4c550;
  width: 100%;
  height: 60px;
  padding: 0;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: 1s ease-in-out;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;

  &:hover{
    background-color: #b34700;
    color: #fff;
  }
`;
