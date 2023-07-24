import {
  ErrorField,
  FieldInputCSS,
  FormContainerCSS,
  LabelDiv,
} from 'components/MainContainerCSS';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/user/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    const { name, email, password } = value;
    dispatch(
      registerUser({
        name: name,
        email: email,
        password: password,
      })
    );
    resetForm();
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
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
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <FormContainerCSS>
        <LabelDiv>
          <FieldInputCSS
            type="text"
            name="name"
            placeholder="Input your Name"
          />
          <ErrorMessage component={ErrorField} name="name" />
        </LabelDiv>
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
        <button type="submit">SignIn</button>
      </FormContainerCSS>
    </Formik>
  );
};
