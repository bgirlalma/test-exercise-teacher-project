import { Formik, ErrorMessage } from "formik";
import { CloseSvg } from "../../image/close";
import {
  Container,
FormContainer,
  WrappIcon,
  TitleForm,
  DescForm,
  WrappForm,
    StyledField,
  ButtonModal,
} from "./registration.styled";

const UserRegistration = () => {
  return (
    <Container>
      <FormContainer>
        <WrappIcon>
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
        <Formik>
          <WrappForm
          //   initialValues={{
          //     name: "",
          //     email: "",
          //     password: "",
          //   }}
          >
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
