import { StarSvg } from '../../../image/Star';
import { BookSvg } from '../../../image/book-open';
import { HeartSvg } from '../../../image/heart';
import {
  Container,
  Wrapp,
  IconContainer,
  Title,
  HeartYellowContainer,
} from './info-teacher.styled';
import { HeartYellowSvg } from '../../../image/heartYellow';
import { useState } from 'react';
import { useDispatch,} from 'react-redux';
import {
  addTeacherFavorites,
  removeTeacherFavorites,
} from '../../../../redux/teacher/teacherOperation';
import { useAuth } from '../../../../hooks/userHook';
import Notiflix from 'notiflix';

const InfoTeacher = ({ teacher }) => {
  const dispatch = useDispatch();
  const { isLoggIn } = useAuth();

  // Получаем начальное значение isFavorite из локального хранилища
  const initialIsFavorite =
    JSON.parse(localStorage.getItem('favorites'))?.includes(teacher.id) ||
    false;
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

  const handleFavorite = () => {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
 if (!favorites) {
   console.log(
     'Favorites data not loaded yet. Waiting for data to be loaded...'
   );
   return;
 }

 if (!isFavorite) {
   if (!isLoggIn) {
     Notiflix.Report.failure(
       'Failure!',
       'Ви не можете додати вчителя в обранні!. Зареєструйтесь будь-ласка та повторіть спробу!',
       'Okay'
     );
     return;
   }
   console.log('Adding teacher to favorites:', teacher.id);
   dispatch(addTeacherFavorites(teacher.id));
   setIsFavorite(true);
   const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
   const updatedFavorites = [...favorites, teacher.id];
   localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
   console.log('Favorites after addition:', updatedFavorites);
 } else {
   console.log('Removing teacher from favorites:', teacher.id);
   dispatch(removeTeacherFavorites(teacher.id));
   setIsFavorite(false);
   const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
   const updatedFavorites = favorites.filter(id => id !== teacher.id);
   localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
   console.log('Favorites after removal:', updatedFavorites);
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
