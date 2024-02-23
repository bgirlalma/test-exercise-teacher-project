import styled from 'styled-components';
import { Form, Field } from "formik";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const FormContainer = styled.div`
  position: relative;
  border-radius: 30px;
  max-width: 565px;
  background-color: #fff;
  padding: 64px;
`;

export const WrappIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px 20px 0 0;
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

  &:hover {
    background-color: #b34700;
    color: #fff;
  }
`;