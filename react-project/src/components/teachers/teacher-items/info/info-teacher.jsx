import { useEffect, useState } from 'react';
import { StarSvg } from '../../../image/Star';
import { BookSvg } from '../../../image/book-open';
import { HeartSvg } from '../../../image/heart';
import {
  Container,
  Wrapp,
  IconContainer,
  Title,
  HeartContainer,
} from './info-teacher.styled';
import { HeartYellowSvg } from '../../../image/heartYellow';

const InfoTeacher = ({ teacher }) => {


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

      <HeartContainer>
      <HeartYellowSvg /> : <HeartSvg />
      </HeartContainer>
    </Container>
  );
};

export default InfoTeacher;
