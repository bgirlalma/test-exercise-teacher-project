import { StarSvg } from '../../../image/Star';
import { BookSvg } from '../../../image/book-open';
import { HeartSvg } from '../../../image/heart';
import {
  Container,
  Wrapp,
  IconContainer,
  Title,
  HeartContainer,
  HeartYellowContainer,
} from './info-teacher.styled';
import { HeartYellowSvg } from '../../../image/heartYellow';
import { useDispatch, useSelector} from 'react-redux';
import {addTeacherFavorites, removeTeacherFavorites} from '../../../../redux/teacher/teacherOperation'
import { useCallback, useEffect, useState } from 'react';
 

const InfoTeacher = ({ teacher }) => {
  const dispatch = useDispatch()
 const favorites = useSelector(state => state.favorites.favorites);
 const [isFavorite, setIsFavorite] = useState(favorites.includes(teacher.id));

  useEffect(() => {
    setIsFavorite(favorites.includes(teacher.id));
  }, [favorites, teacher.id]);

  const updateFavorites = () => {
    if (!isFavorite) {
      console.log('Adding teacher to favorites:', teacher.id);
      dispatch(addTeacherFavorites(teacher.id));
    } else {
      dispatch(removeTeacherFavorites(teacher.id));
    }
    setIsFavorite(prevIsFavorite => !prevIsFavorite); // Обновляем состояние по колбэку
  };
  

  return (
    <Container>
      <Wrapp>
        <IconContainer>
          <BookSvg />
        </IconContainer>
        <Title>Lessons online</Title>

        <Title>Lessons done: {teacher.lessons_done}</Title>

        <IconContainer>
          <StarSvg />
        </IconContainer>
        <Title>Rating: {teacher.rating} </Title>

        <Title>Price / 1 hour: {teacher.price_per_hour}</Title>
      </Wrapp>

      <HeartYellowContainer onClick={updateFavorites}>
        {isFavorite ? <HeartYellowSvg /> : <HeartSvg />}
      </HeartYellowContainer>
    </Container>
  );
};

export default InfoTeacher;
