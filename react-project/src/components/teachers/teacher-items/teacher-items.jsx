import InfoTeacher from "./info/info-teacher";
import {
  WrappContainer,
  TeacherList,
  PositionImage,
  Image,
  SvgContainer,
  FlexContainer,
  DescLanguage,
  MainTitle,
  StyledDescInfo,
  ReadMore,
  ButtonWrapp,
  LoadMoreButton,
  StyledList,
  ListLevels,
} from './teachet.styled';
import teacherData from '../../../teacher-json/teacher.json'
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { teachersList } from "../../../redux/teacher/teacherOperation";
import { StatusOnlineSvg } from "../../image/Ellipse";
import MenuReadMore from "./readmore/redmore";


const TeachersItems = () => {
  const despatch = useDispatch();

  // state кнопки read more
  const [showReadMore, setShowReadMore] = useState({});

  useEffect(() => {
    despatch(teachersList());
  })

// функция для зміни state read more
  const toggleReadMore = id => {
    // відновлює state за допомогою коллбєку, видаляє або додає елемент з ключем [id]. Якщо елемент вжє иснує-видаляємо.
    setShowReadMore(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <WrappContainer>
      <ul>
        {teacherData &&
          teacherData.map((teacher, id) => (
            <TeacherList key={id}>
              <PositionImage>
                <Image src={teacher.avatar_url} alt={teacher.name} />
                <SvgContainer>
                  <StatusOnlineSvg />
                </SvgContainer>
              </PositionImage>
              <div>
                <FlexContainer>
                  <DescLanguage>Languages</DescLanguage>
                  <InfoTeacher teacher={teacher} />
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

                {/* {якщо showReadMore = true, показуємо компонент меню} */}
                {showReadMore[id] ? (
                  <MenuReadMore teacher={teacher} />
                ) : (
                  <ReadMore onClick={() => toggleReadMore(id)}>
                    Read more
                  </ReadMore>
                )}

                {/* {якщо showReadMore[id] неактивне, то відображаємо кнопки, якщо активно ні} */}
                {!showReadMore[id] && (
                  <div>
                    <StyledList>
                      {teacher.levels.map((level, index) => (
                        <ListLevels key={index} level={level}>
                          {level}
                        </ListLevels>
                      ))}
                    </StyledList>
                  </div>
                )}
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
