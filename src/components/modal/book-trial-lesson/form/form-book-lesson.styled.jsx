import { Field } from "formik";
import styled from "styled-components";


export const FormWrapp = styled.div`
  display: grid;
  gap: 18px;
  flex-direction: column;
`;

export const StyledField = styled(Field)`
  max-width: 472px;
  height: 54px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  padding: 0;
  padding-left: 18px;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 137%;
  color: #121417;

  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    border: 1px solid #6699cc;
  }
`;

export const ButtonBookLesson = styled.button`
  height: 60px;
  margin-top: 40px;
  border: none;
  border-radius: 12px;
  padding: 0;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  color: #121417;

  background-color: #9fbaae;
  color: #121417;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover,
  &:focus {
    background-color: #cbded3;
  }
`;