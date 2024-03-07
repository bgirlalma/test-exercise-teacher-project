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
import { useState } from 'react';
 

const InfoTeacher = ({ teacher }) => {
  const dispatch = useDispatch()
  const [isFavorite, setIsFavorite] = useState(false);
  

  const addToFavoritesHandler = () => {
    console.log('Trying to add teacher to favorites:', teacher.id);
    if (!isFavorite) {
      console.log('Adding teacher to favorites:', teacher.id);
      dispatch(addTeacherFavorites(teacher.id));
      setIsFavorite(true)
    } else {
      console.log('Teacher is already in favorites:', teacher.id);
    }
  };

  const removeFromFavoritesHandler = () => {
    console.log('Trying to remove teacher from favorites:', teacher.id);
    dispatch(removeTeacherFavorites(teacher.id));
    setIsFavorite(false)
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

      {isFavorite ? (
        <HeartYellowContainer onClick={removeFromFavoritesHandler}>
          <HeartYellowSvg />
        </HeartYellowContainer>
      ) : (
        <HeartContainer onClick={addToFavoritesHandler}>
          <HeartSvg />
        </HeartContainer>
      )}
    </Container>
  );
};

export default InfoTeacher;
