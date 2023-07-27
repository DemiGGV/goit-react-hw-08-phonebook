import { useDispatch } from 'react-redux';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

import {
  FormContainerCSS,
  FieldInputCSS,
  ErrorField,
  LabelDiv,
  FormEditBtnCSS,
  TextFieldsCSS,
} from './FormEditStyle';
import { editContact } from 'redux/contacts/contactsOperations';

export const FormEdit = ({ data }) => {
  const dispatch = useDispatch();
  const { id, name, number } = data;

  const handleSubmit = value => {
    const { name, number } = value;
    dispatch(
      editContact({
        taskId: id,
        name: name.trim(),
        number: number.trim(),
      })
    );
  };

  const Schema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(30, 'Too Long!'),
    number: Yup.string().min(5, 'Too Short!').max(15, 'Too Long!'),
  });

  return (
    <Formik
      initialValues={{
        name: name,
        number: number,
      }}
      validationSchema={Schema}
      onSubmit={handleSubmit}
    >
      <FormContainerCSS>
        <TextFieldsCSS>
          <LabelDiv>
            <FieldInputCSS type="text" name="name" />
            <ErrorMessage component={ErrorField} name="name" />
          </LabelDiv>
          <LabelDiv>
            <FieldInputCSS type="tel" name="number" />
            <ErrorMessage component={ErrorField} name="number" />
          </LabelDiv>
        </TextFieldsCSS>
        <FormEditBtnCSS type="submit">📝</FormEditBtnCSS>
      </FormContainerCSS>
    </Formik>
  );
};
