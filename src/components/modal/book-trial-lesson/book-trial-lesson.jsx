import { Form, Formik } from 'formik';
import { CloseSvg } from '../../image/close';
import {
  Container,
  BookTrialLessonContainer,
  IconCloseWrappContainer,
  BookTrialLessonTitle,
  BookTrialLessonDesc,
  TeachetInfo,
  TeacherInfoList,
  ModalImage,
  TeacherListDesc,
  TeacherListTitle,
  TitleRadio,
} from './book-trial-lesson.styled';
import { RadioButton } from './radiobutton/radio-button';
import { FormBookTrialLesson } from './form/form-book-lesson';

const initialValues = {
  fullname: '',
  email: '',
  phonenumber: '',
};
const BookTrialLessonModal = ({ closeModal, teacher }) => {

  return (
    <Container>
      <BookTrialLessonContainer>
        <IconCloseWrappContainer onClick={closeModal}>
          <CloseSvg />
        </IconCloseWrappContainer>
        <BookTrialLessonTitle>Book trial lesson</BookTrialLessonTitle>
        <BookTrialLessonDesc>
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </BookTrialLessonDesc>

        <div>
          <TeachetInfo>
            <TeacherInfoList>
              <ModalImage
                src={teacher.avatar_url}
                alt={teacher.name}
                width="44"
                height="44"
              />
              <div>
                <TeacherListDesc>Your teacher</TeacherListDesc>
                <TeacherListTitle>{`${teacher.name} ${teacher.surname}`}</TeacherListTitle>
              </div>
            </TeacherInfoList>
          </TeachetInfo>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            // Обработка отправки формы...
            console.log('Form submitted:', values);

            // Сброс формы после успешной отправки
            resetForm();
          }}
        >
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
