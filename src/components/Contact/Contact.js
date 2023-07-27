import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { setCurrentID } from 'redux/contacts/contactsSlice';
import { selectCurrentID, selectIsDeleting } from 'redux/contacts/selectors';
import { LiButton, LiItem } from './ContactStyle';
import { FormEdit } from 'components/FormEdit/FormEdit';

export const Contact = ({ data }) => {
  const dispatch = useDispatch();
  const isDeleting = useSelector(selectIsDeleting);
  const currentID = useSelector(selectCurrentID);

  const handleDeleteClick = evt => {
    const currentID = evt.target.dataset.id;
    dispatch(setCurrentID(currentID));
    dispatch(deleteContact(currentID));
  };

  const { id } = data;

  return (
    <LiItem>
      <FormEdit data={data} />
      <LiButton
        type="button"
        disabled={isDeleting && currentID === id}
        data-id={id}
        onClick={handleDeleteClick}
      >
        Remove
      </LiButton>
    </LiItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.array,
};
