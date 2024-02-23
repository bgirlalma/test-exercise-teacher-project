import { Formik, ErrorMessage } from 'formik';
import { CloseSvg } from '../../image/close';
import {
  Container,
  FormContainer,
  WrappIcon,
  TitleForm,
  DescForm,
  WrappForm,
  StyledField,
  ButtonModal,
} from './login.styled';
// import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(10, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(10, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const UserLogIn = () => {
  // const dispatch = useDispatch()
  const handleChange = async(e) => {
    e.preventDefaul();
    const value = e.tardet.value;
    console.log(value);

  };
  return (
    <Container>
      <FormContainer>
        <WrappIcon>
          <CloseSvg />
        </WrappIcon>
        <div>
          <TitleForm>Log In</TitleForm>
          <DescForm>
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
          </DescForm>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={handleChange}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <WrappForm>
              <StyledField
                name="email"
                id="email"
                type="text"
                autoComplete="off"
                required
                placeholder="mariafrosina2023@gmail.com"
              />
              <ErrorMessage name="email" component="div" />

              <StyledField
                id="password"
                name="password"
                type="password"
                autoComplete="off"
              />
              <ErrorMessage name="password" component="div" />

              <ButtonModal type="submit">Log In</ButtonModal>
            </WrappForm>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default UserLogIn;
