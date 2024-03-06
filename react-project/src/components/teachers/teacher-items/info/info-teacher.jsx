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
import { useDispatch, useSelector } from 'react-redux';
import { addTeacherFavorites } from '../../../../redux/teacher/teacherOperation';
import { useState } from 'react';
 

const InfoTeacher = ({ teacher }) => {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites);
 const isFavorite = useSelector(state => state.favorites[teacher.id]);

   const addToFavoritesHandler = id => {
     dispatch(addTeacherFavorites(id));
    
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
        <HeartContainer>
          <HeartSvg onClick={() => addToFavoritesHandler(teacher.id)} />
        </HeartContainer>
      ) : (
        <HeartYellowContainer>
          <HeartYellowSvg />
        </HeartYellowContainer>
      )}
    </Container>
  );
};

export default InfoTeacher;
