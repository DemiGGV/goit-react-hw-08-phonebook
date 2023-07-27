import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  FormContainerCSS,
  FieldInputCSS,
  TextFieldsCSS,
} from './FormEditStyle';
import { editContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/selectors';
import { setError } from 'redux/contacts/contactsSlice';

export const FormEdit = ({ data }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const { id, name, number } = data;

  const handleSubmit = evt => {
    let user;
    evt.preventDefault();
    console.log(evt.target.name, evt.target.value);
    if (evt.target.name === 'name') {
      if (
        contacts.find(
          contact =>
            contact.name.toLowerCase() === evt.target.value.trim().toLowerCase()
        )
      ) {
        dispatch(setError(`${evt.target.value.trim()} already in contacts!`));
        return;
      }
      user = {
        taskId: id,
        name: evt.target.value.trim(),
        number: number,
      };
    } else {
      user = {
        taskId: id,
        name: name,
        number: evt.target.value.trim(),
      };
    }
    dispatch(editContact(user));
  };

  return (
    <FormContainerCSS>
      <TextFieldsCSS>
        <FieldInputCSS
          type="text"
          name="name"
          value={name}
          onChange={handleSubmit}
        />
        <FieldInputCSS
          type="tel"
          name="number"
          value={number}
          onChange={handleSubmit}
        />
      </TextFieldsCSS>
    </FormContainerCSS>
  );
};

FormEdit.propTypes = {
  contact: PropTypes.array,
};
