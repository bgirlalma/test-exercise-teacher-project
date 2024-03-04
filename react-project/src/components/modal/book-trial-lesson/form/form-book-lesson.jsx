import {
  FormWrapp,
  StyledField,
  ButtonBookLesson,
} from './form-book-lesson.styled';
import { useDispatch } from 'react-redux';

export const FormBookTrialLesson = () => {
  const dispatch = useDispatch();

  return (
    <FormWrapp>
      <StyledField
        type="text"
        name="full-name"
        id="full-name"
        autoComplete="off"
        required
        placeholder="Full Name"
      />
      <StyledField
        type="text"
        name="email"
        id="email"
        autoComplete="off"
        required
        placeholder="Email"
      />
      <StyledField
        type="text"
        name="number"
        id="number"
        autoComplete="off"
        required
        placeholder="Phone number"
      />
      <ButtonBookLesson type="submit">Book</ButtonBookLesson>
    </FormWrapp>
  );
};