import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { List } from 'components/MainContainerCSS';
import { selectCurrentID, selectIsDeleting } from 'redux/contacts/selectors';
import { setCurrentID } from 'redux/contacts/contactsSlice';
import { LiButton, LiItem, LiSpan } from './ContactsListStyled';

export const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();
  const isDeleting = useSelector(selectIsDeleting);
  const currentID = useSelector(selectCurrentID);
  const handleClick = evt => {
    const currentID = evt.target.dataset.id;
    dispatch(setCurrentID(currentID));
    dispatch(deleteContact(currentID));
  };

  return (
    <List>
      {contacts.map(contact => (
        <LiItem key={contact.id}>
          {contact.name}: <LiSpan>{contact.number}</LiSpan>
          <LiButton
            type="button"
            disabled={isDeleting && currentID === contact.id}
            data-id={contact.id}
            onClick={handleClick}
          >
            Delete
          </LiButton>
        </LiItem>
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
