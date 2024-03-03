import { Field, Form, Formik} from 'formik';
import { CloseSvg } from '../../image/close';

const initialValues = {
    fullname: "",
    email: "",
    phonenumber: ""
}
const BookTrialLessonModal = () => {
  return (
      <div>
          <div>
              <CloseSvg/>
          </div>
      <h2>Book trial lesson</h2>
      <p>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>

      <div>
        <ul>
          <li></li>
        </ul>
      </div>

      <Formik initialValues={initialValues}>
        {({ values }) => (
          <Form>
            <h3>What is your main reason for learning English?</h3>

            <div className="group">
              <label>
                <Field type="radio" name="radio-group" value="1" />
                Career and business
              </label>
              <label>
                <Field type="radio" name="radio-group" value="2" />
                Lesson for kids
              </label>
              <label>
                <Field type="radio" name="radio-group" value="3" />
                Living abroad
              </label>
              <label>
                <Field type="radio" name="radio-group" value="4" />
                Exams and coursework
              </label>
              <label>
                <Field type="radio" name="radio-group" value="5" />
                Culture, travel or hobby
              </label>
            </div>
          </Form>
        )}

        <Form>
          <Field
            type="text"
            name="full-name"
            id="full-name"
            autoComplete="off"
            required
            placeholder="Full Name"
          />
          <Field
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            required
            placeholder="Email"
          />
          <Field
            type="text"
            name="number"
            id="number"
            autoComplete="off"
            required
            placeholder="Phone number"
          />
              </Form>
              
              <button type='submit'>Book</button>
      </Formik>
    </div>
  );
};

export default BookTrialLessonModal;
