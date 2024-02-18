import { Formik, Form, Field, ErrorMessage,  } from "formik";
import { CloseSvg } from "../../image/close";
import { WrappContainer, TextContainer, Title, Desc } from "../../login/login.styled";

const LogIn = () => {
    return (
      <WrappContainer>
        <CloseSvg />
        <TextContainer>
          <Title>Log In</Title>
          <Desc>
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
          </Desc>
        </TextContainer>

        <Formik>
          <Form
            initialValues={{
              email: "",
              password: "",
            }}
          >
            <Field
              name="email"
              id="email"
              type="text"
              autoComplete="off"
              required
              placeholder="mariafrosina2023@gmail.com"
            />
            <ErrorMessage name="email" component="div" />

            <Field
              id="password"
              name="password"
              type="password"
              autoComplete="off"
            />
            <ErrorMessage name="password" component="div" />

            <button type="submit">Log In</button>
          </Form>
        </Formik>
      </WrappContainer>
    );
}

export default LogIn;