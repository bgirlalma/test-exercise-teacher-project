import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StatusOnlineSvg } from "../image/Ellipse";
import InfoTeacher from "../teachers/teacher-items/info/info-teacher";
import MenuReadMore from "../teachers/teacher-items/readmore/redmore";
import { WrappContainer,FavoriteTitle, TeacherList, PositionImage, SvgContainer, Image, FlexContainer, DescLanguage, MainTitle, StyledDescInfo, ReadMore, StyledList, ListLevels } from "./favorite.styled";
import LoadMoreButton from "../teachers/teacher-items/loadmore/loadmore";

const FavoriteTeachers = () => {
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);
  const teachers = useSelector(state => state.teachers.teachers);
  //state кнопки read more
  const [showReadMore, setShowReadMore] = useState({});

  // функция для зміни state read more
  const toggleReadMore = id => {
    // відновлює state за допомогою коллбєку, видаляє або додає елемент з ключем [id]. Якщо елемент вжє иснує-видаляємо.
    setShowReadMore(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  // відображення карток на сторінці
  const itemsPerPage = 4;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  const loadmore = () => {
    setVisibleItems(prevVisibItems => prevVisibItems + itemsPerPage);
  };

  useEffect(() => {
    // Получаем данные из локального хранилища
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Находим объекты учителей по их идентификаторам
    const favoriteTeacherObjects = teachers.filter(teacher =>
      favorites.includes(teacher.id)
    );

    // Устанавливаем данные в состояние
    setFavoriteTeachers(favoriteTeacherObjects);
  }, [teachers]);

  return (
    <WrappContainer>
      <FavoriteTitle>Favorite Page</FavoriteTitle>
      <ul>
        {favoriteTeachers &&
          favoriteTeachers.slice(0, visibleItems).map(teacher => (
            <TeacherList key={teacher.id}>
              <PositionImage>
                <Image src={teacher.avatar_url} alt={teacher.name} />

                <SvgContainer>
                  <StatusOnlineSvg />
                </SvgContainer>
              </PositionImage>

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

                {/* {якщо showReadMore = true, показуємо компонент меню} */}
                {showReadMore[teacher.id] ? (
                  <MenuReadMore teacher={teacher} />
                ) : (
                  <ReadMore onClick={() => toggleReadMore(teacher.id)}>
                    Read more
                  </ReadMore>
                )}

                {/* {якщо showReadMore[id] неактивне, то відображаємо кнопки, якщо активно ні} */}
                {!showReadMore[teacher.id] && (
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

      {visibleItems < favoriteTeachers.length && (
        <LoadMoreButton loadmore={loadmore}/>
      )}
    </WrappContainer>
  );
};
export default FavoriteTeachers;