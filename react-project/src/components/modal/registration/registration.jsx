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
} from './registration.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/user-autorization/authOperation';
import { useState } from 'react';

// початковий state форми
const initialValues = {
  name: '',
  email: '',
  password: '',
};


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  email: Yup.string().min(8, 'Too Short!').required('Required'),
  password: Yup.string()
    .min(10, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

const UserRegistration = () => {
const dispatch = useDispatch()
  const [isOpenModal, setIsOpenModal] = useState(false)
  
  const handleClose = () => {
    setIsOpenModal(false);
  }
  return (
    <Container>
        <FormContainer>
          <WrappIcon onClick={handleClose}>
            <CloseSvg />
          </WrappIcon>
          <div>
            <TitleForm>Registration</TitleForm>
            <DescForm>
              Thank you for your interest in our platform! In order to register,
              we need some information. Please provide us with the following
              information
            </DescForm>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(registerUser(values));
              resetForm();
            }}
          >
            <WrappForm>
              <StyledField
                name="name"
                id="name"
                type="text"
                autoComplete="off"
                required
                placeholder="Name"
              />
              <ErrorMessage name="name" component="div" />

              <StyledField
                name="email"
                id="email"
                type="text"
                autoComplete="off"
                required
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" />

              <StyledField
                name="password"
                id="password"
                type="password"
                autoComplete="off"
                required
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" />

              <ButtonModal type="submit">Sign Up</ButtonModal>
            </WrappForm>
          </Formik>
        </FormContainer>
    </Container>
  );
};

export default UserRegistration;
