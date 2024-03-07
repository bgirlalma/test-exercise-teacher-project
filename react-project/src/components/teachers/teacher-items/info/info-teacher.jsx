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
import { useDispatch} from 'react-redux';
import {addTeacherFavorites, removeTeacherFavorites} from '../../../../redux/teacher/teacherOperation'
import { useEffect, useState } from 'react';
 

const InfoTeacher = ({ teacher }) => {
  const dispatch = useDispatch()
  const [isFavorite, setIsFavorite] = useState(false);

  // перевірка state
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    if (favorites && favorites.includes(teacher.id)) {
      setIsFavorite(true)
    }
  }, [teacher.id])

  const updateFavorites = () => {
    if (!isFavorite) {
      console.log('Adding teacher to favorites:', teacher.id);
      dispatch(addTeacherFavorites(teacher.id));
      setIsFavorite(true);
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      localStorage.setItem('favorites', JSON.stringify([...favorites, teacher.id]))
    } else {
       dispatch(removeTeacherFavorites(teacher.id));
      setIsFavorite(false);
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      localStorage.setItem('favorites', JSON.stringify(favorites.filter(id => id !== teacher.id)))
    }
  }
  

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
