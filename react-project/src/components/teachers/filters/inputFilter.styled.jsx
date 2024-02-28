import styled from 'styled-components';

export const WrappFormContainer = styled.div`
  display: grid;
  grid-template-columns: 221px 198px 124px;
  gap: 20px;
  margin-bottom: 32px;
  z-index: 1;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const FormContainerLanguages = styled.div`
  width: 221px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #8a8a89;
  margin-bottom: 8px;
`;

// attrs() додаємо атрибут до компоненту. readOnly: true інпут буде доступний для читання
export const InputLanguages = styled.input.attrs({ readOnly: true })`
  max-width: 221px;
  height: 48px;
  border: none;
  border-radius: 14px;
  padding: 0;
  cursor: pointer;
  transition: 1s linear #8a8a89;
  padding-left: 40px;

  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #121417;

  &:hover {
    border: 1px solid #8a8a89;
  }

  &:focus {
    outline: none;
  }
`;

export const DropdownContainerLevel = styled.div`
position: relative;
display: inline-block;
`;

export const FormContainerLevel = styled.div`
  width: 198px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

// attrs() додаємо атрибут до компоненту. readOnly: true інпут буде доступний для читання
export const InputLevel = styled.input.attrs({ readOnly: true })`
  max-width: 198px;
  height: 48px;
  border: none;
  border-radius: 14px;
  padding: 0;
  cursor: pointer;
  transition: 1s linear #8a8a89;

  padding-left: 40px;

  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #121417;

  &:hover {
    border: 1px solid #8a8a89;
  }

  &:focus {
    outline: none;
  }
`;

export const FormContainerPrice = styled.div`
  width: 124px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

// attrs() додаємо атрибут до компоненту. readOnly: true інпут буде доступний для читання
export const InputPrice = styled.input.attrs({ readOnly: true })`
  max-width: 124px;
  height: 48px;
  border: none;
  border-radius: 14px;
  padding: 0;
  cursor: pointer;
  transition: 1s linear #8a8a89;

  padding-left: 40px;

  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #121417;

  &:hover {
    border: 1px solid #8a8a89;
  }

  &:focus {
    outline: none;
  }
`;
// props => props.$isOpen && приймає пропс компонент та повертає CSS стилі. Визначає відкритий список чи ні
export const IconWrapp = styled.div`
  position: absolute;
  top: 65%;
  right: 10px;
  transform: translateY(-50%);
  transition: transform 0.3s ease;

  ${props =>
    props.$isOpen &&
    `
    right: 10px;
    transform: translateY(-30%) rotate(180deg);
  `}
`;

export const DropdownList = styled.ul`
  position: absolute;
  width: calc(100% - 20px);
  top: calc(100% + 5px);
  background-color: #fff;
  border-radius: 14px;
  border: 1px solid #8a8a89;
  padding: 15px 0 15px 20px;
  margin-top: 5px;
  overflow-y: auto;
  z-index: 2;
`;

export const StyledList = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: #121417;

  transition:
    width 2s,
    height 4s;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover,
  &:focus {
    color: #9fbaae;
  }
`;
