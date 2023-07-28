import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

import {
  FormContainerCSS,
  FieldInputCSS,
  ErrorField,
  LabelDiv,
} from '../MainContainerCSS';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/contactsOperations';
import { setError } from 'redux/contacts/contactsSlice';

export const NumberBoundary = {
  Min: 5,
  Max: 15,
};
export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (value, { resetForm }) => {
    const { name, number } = value;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.trim().toLowerCase()
      )
    ) {
      dispatch(setError(`${name.trim()} already in contacts!`));
      return;
    }
    dispatch(
      addContact({
        name: name.trim(),
        number: number.trim(),
      })
    );
    resetForm();
  };

  const Schema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(NumberBoundary.Min, 'Too Short!')
      .max(NumberBoundary.Max, 'Too Long!')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={Schema}
      onSubmit={handleSubmit}
    >
      <FormContainerCSS>
        <LabelDiv>
          <FieldInputCSS type="text" name="name" />
          <ErrorMessage component={ErrorField} name="name" />
        </LabelDiv>
        <LabelDiv>
          <FieldInputCSS type="tel" name="number" />
          <ErrorMessage component={ErrorField} name="number" />
        </LabelDiv>
        <button type="submit">Add contact</button>
      </FormContainerCSS>
    </Formik>
  );
};
