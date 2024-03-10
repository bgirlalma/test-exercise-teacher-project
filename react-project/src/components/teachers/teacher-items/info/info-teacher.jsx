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
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addTeacherFavorites,
  removeTeacherFavorites,
} from '../../../../redux/teacher/teacherOperation';

const InfoTeacher = ({ teacher }) => {
  const dispatch = useDispatch();
  const [favoritesTeachers, setFavoritesTeachers] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites && favorites.includes(teacher.id)) {
      setIsFavorite(true);
    }
    setFavoritesTeachers(favorites || []);
  }, [teacher.id]);

    const handleFavorite = () => {
      if (!isFavorite) {
        dispatch(addTeacherFavorites(teacher.id));
        setIsFavorite(true);
   
        setFavoritesTeachers(prevFavorites => [...prevFavorites, teacher.id]);
        localStorage.setItem('favorites', JSON.stringify([...favoritesTeachers, teacher.id]));
      } else {
        dispatch(removeTeacherFavorites(teacher.id));
        setIsFavorite(false);

        setFavoritesTeachers(prevFavorites =>
          prevFavorites.filter(id => id !== teacher.id)
        );
        localStorage.setItem(
          'favorites',
          JSON.stringify(favoritesTeachers.filter(id => id !== teacher.id))
        );
      }
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

      <HeartYellowContainer onClick={handleFavorite}>
        {isFavorite ? <HeartYellowSvg /> : <HeartSvg />}
      </HeartYellowContainer>
    </Container>
  );
};

export default InfoTeacher;
