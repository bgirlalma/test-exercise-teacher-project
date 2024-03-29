import InfoTeacher from './info/info-teacher';
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
  StyledList, 
  ListLevels,
} from './teachet.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { teachersList } from '../../../redux/teacher/teacherOperation';
import { StatusOnlineSvg } from '../../image/Ellipse';
import MenuReadMore from './readmore/redmore';
import LoadMoreButton from './loadmore/loadmore';

const TeachersItems = () => {
  const dispatch = useDispatch();
  // const teachers = useSelector(state => state.teachers.teachers);
  // const filters = useSelector(state => state.filters);

  // state кнопки read more
  const [showReadMore, setShowReadMore] = useState({});

  useEffect(() => {
    dispatch(teachersList());
  }, [dispatch]);

  // відображення карток на сторінці
  const itemsPerPage = 4;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  const loadmore = () => {
    setVisibleItems(prevVisibItems => prevVisibItems + itemsPerPage);
  };

  // функция для зміни state read more
  const toggleReadMore = id => {
    // відновлює state за допомогою коллбєку, видаляє або додає елемент з ключем [id]. Якщо елемент вжє иснує-видаляємо.
    setShowReadMore(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const filteredTeachers = useSelector(state => {
    const filters = state.filter.filters;
    const teachers = state.teachers.teachers;
    
    return teachers.filter(teacher => {
      if (filters.languages && teacher.languages !== filters.languages)
        return false;
      if (filters.levels && teacher.levels !== filters.levels) return false;
      if (filters.price && teacher.price_per_hour !== filters.price)
        return false;
      return true;
    });
  });

  return (
    <WrappContainer>
      <ul>
        {filteredTeachers &&
          filteredTeachers.slice(0, visibleItems).map((teacher, id) => (
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

      {visibleItems < filteredTeachers.length && (
        <LoadMoreButton loadmore={loadmore} />
      )}
    </WrappContainer>
  );
};

export default TeachersItems;
