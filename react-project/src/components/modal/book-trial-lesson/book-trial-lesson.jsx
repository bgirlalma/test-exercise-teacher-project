import { Field, Form, Formik } from 'formik';
import { CloseSvg } from '../../image/close';
import {
  Container,
  BookTrialLessonContainer,
  IconCloseWrappContainer,
  BookTrialLessonTitle,
  BookTrialLessonDesc,
  TeachetInfo,
  TitleRadio,
} from './book-trial-lesson.styled';
import { RadioButton } from './radiobutton/radio-button';
import { FormBookTrialLesson } from './form/form-book-lesson';

const initialValues = {
  fullname: '',
  email: '',
  phonenumber: '',
};
const BookTrialLessonModal = () => {
  return (
    <Container>
      <BookTrialLessonContainer>
        <IconCloseWrappContainer>
          <CloseSvg />
        </IconCloseWrappContainer>
        <BookTrialLessonTitle>Book trial lesson</BookTrialLessonTitle>
        <BookTrialLessonDesc>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </BookTrialLessonDesc>

        <div>
          <TeachetInfo>
            <li>
              <img src="" alt="" />
              <p>Your teacher</p>
              <h2></h2>
            </li>
          </TeachetInfo>
        </div>

        <Formik initialValues={initialValues}>
          {({ values }) => (
            <Form>
              <TitleRadio>
                What is your main reason for learning English?
              </TitleRadio>
              <RadioButton />
              <FormBookTrialLesson />
            </Form>
          )}
        </Formik>
      </BookTrialLessonContainer>
    </Container>
  );
};

export default BookTrialLessonModal;
