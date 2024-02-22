import { Formik, ErrorMessage,  } from "formik";
import { CloseSvg } from "../../image/close";
import { Container, FormContainer, WrappIcon, TitleForm, DescForm, WrappForm, StyledField, ButtonModal } from "./login.styled";

const UserLogIn = () => {
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

        <Formik>
          <WrappForm
            initialValues={{
              email: "",
              password: "",
            }}
          >
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
        </Formik>
      </FormContainer>
    </Container>
  );
}

export default UserLogIn;