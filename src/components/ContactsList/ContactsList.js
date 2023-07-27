import PropTypes from 'prop-types';
import { List } from './ContactsListStyled';
import { Contact } from 'components/Contact/Contact';

export const ContactsList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Contact key={contact.id} data={contact} />
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
