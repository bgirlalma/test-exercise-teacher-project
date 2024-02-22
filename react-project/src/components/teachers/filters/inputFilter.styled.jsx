import styled from "styled-components";

export const WrappFormContainer = styled.div`
  display: grid;
  grid-template-columns: 221px 198px 124px;
  gap: 20px;
  margin-bottom: 32px;
`;

export const FormContainerLanguages = styled.div`
  width: 221px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #8a8a89;
  margin-bottom: 8px;
`;

export const InputLanguages = styled.input`
width: 221px;
height: 48px;
border: none;
border-radius: 14px;
padding: 0;
`;

export const FormContainerLevel = styled.div`
  width: 198px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const InputLevel = styled.input`
  width: 198px;
  height: 48px;
  border: none;
  border-radius: 14px;
  padding: 0;
`;

export const FormContainerPrice = styled.div`
  width: 124px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const InputPrice = styled.input`
  width: 124px;
  height: 48px;
  border: none;
  border-radius: 14px;
  padding: 0;
`;

export const IconWrapp = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%);
  margin-right: 14px;
`;

export const DropdownList = styled.ul`
  background-color: #fff;
  border-radius: 14px;
  padding: 15px 0 15px 20px;
  margin-top: 5px;
`;

export const StyledList = styled.li`
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: #121417;
  margin-bottom: 8px;
  transition: width 2s, height 4s;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover,
  &:focus {
    color: #9fbaae;
  }
`;