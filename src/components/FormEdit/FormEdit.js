import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  FormContainerCSS,
  FieldInputCSS,
  TextFieldsCSS,
} from './FormEditStyle';
import { editContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/selectors';
import { useState } from 'react';
import { NumberBoundary } from 'components/Form/Form';

export const FormEdit = ({ data }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [nameSt, setNameSt] = useState(data.name);
  const [numberSt, setNumberSt] = useState(data.number);
  const { id } = data;

  const findIndexContact = () => {
    return contacts.findIndex(contact => contact.id === id);
  };

  const handleSubmit = evt => {
    let user;
    evt.preventDefault();
    if (evt.target.name === 'name') {
      if (
        contacts.find(
          contact =>
            contact.name.toLowerCase() === evt.target.value.trim().toLowerCase()
        )
      ) {
        return;
      }
      user = {
        taskId: id,
        name: evt.target.value.trim(),
        number: numberSt,
      };
    } else {
      if (contacts[findIndexContact()].number === evt.target.value.trim())
        return;
      user = {
        taskId: id,
        name: nameSt,
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
          value={nameSt}
          onBlur={handleSubmit}
          onChange={evt => {
            setNameSt(evt.target.value);
          }}
        />
        <FieldInputCSS
          type="tel"
          name="number"
          value={numberSt}
          onBlur={handleSubmit}
          onChange={evt => {
            if (
              evt.target.value.length < NumberBoundary.Min ||
              evt.target.value.length > NumberBoundary.Max
            )
              return;
            if (!isNaN(evt.nativeEvent.data) || evt.nativeEvent.data === '+') {
              setNumberSt(evt.target.value);
              return;
            }
            return;
          }}
        />
      </TextFieldsCSS>
    </FormContainerCSS>
  );
};

FormEdit.propTypes = {
  contact: PropTypes.array,
};
