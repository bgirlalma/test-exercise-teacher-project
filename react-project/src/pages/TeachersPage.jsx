import Teachers from "../components/teachers/teacher";
import styled from "styled-components";
const WrappContainer = styled.div`
  background-color: #f8f8f8;
`;
const TeacherPage = () => {
  return (
    <WrappContainer>
      <Teachers />
    </WrappContainer>
  );
};

export default TeacherPage;
