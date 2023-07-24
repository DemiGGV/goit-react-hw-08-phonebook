import { useDispatch } from 'react-redux';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { loginUser } from 'redux/user/authOperations';
import {
  ErrorField,
  FieldInputCSS,
  FormContainerCSS,
  LabelDiv,
} from 'components/MainContainerCSS';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    const { email, password } = value;
    dispatch(
      loginUser({
        email: email,
        password: password,
      })
    );
    resetForm();
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .min(3, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(5, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <FormContainerCSS>
        <LabelDiv>
          <FieldInputCSS
            type="email"
            name="email"
            placeholder="Input your Email"
          />
          <ErrorMessage component={ErrorField} name="email" />
        </LabelDiv>
        <LabelDiv>
          <FieldInputCSS
            type="password"
            name="password"
            placeholder="Input your Password"
          />
          <ErrorMessage component={ErrorField} name="password" />
        </LabelDiv>
        <button type="submit">LogIn</button>
      </FormContainerCSS>
    </Formik>
  );
};
