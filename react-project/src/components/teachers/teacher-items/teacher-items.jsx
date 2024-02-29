import InfoTeacher from "./info/info-teacher";
import {
  WrappContainer,
  TeacherList,
  Image,
  FlexContainer,
  DescLanguage,
  MainTitle,
  StyledDescInfo,
  ReadMoreContainer,
  ReadMore,
  ButtonWrapp,
  LoadMoreButton,
} from "./teachet.styled";
import teacherData from '../../../teacher-json/teacher.json'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { teachersList } from "../../../redux/teacher/teacherOperation";

const TeachersItems = () => {
  const despatch = useDispatch()

  useEffect(() => {
    despatch(teachersList());
  })
  return (
    <WrappContainer>
      <ul>
        {teacherData &&
          teacherData.map((teacher, id) => (
            <TeacherList key={id}>
              <Image src={teacher.avatar_url} alt={teacher.name} />
              <div>
                <FlexContainer>
                  <DescLanguage>Languages</DescLanguage>
                  <InfoTeacher teacher={teacher}/>
                </FlexContainer>
                <MainTitle>
                  {teacher.name} {teacher.surname}
                </MainTitle>
                <StyledDescInfo>Speaks: {teacher.languages}</StyledDescInfo>
                <StyledDescInfo>
                  Lesson Info: {teacher.lesson_info}
                </StyledDescInfo>
                <StyledDescInfo>
                  Conditions: {teacher.conditions}
                </StyledDescInfo>

                <ReadMoreContainer>
                  <ReadMore to="">Read more</ReadMore>
                </ReadMoreContainer>

                <div>
                  <ul>
                    <li>{teacher.levels}</li>
                  </ul>
                </div>
              </div>
            </TeacherList>
          ))}
      </ul>

      <ButtonWrapp>
        <LoadMoreButton type="button">Load more</LoadMoreButton>
      </ButtonWrapp>
    </WrappContainer>
  );
};

export default TeachersItems;
