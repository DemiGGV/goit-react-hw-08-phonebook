import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { toast } from 'react-toastify';
import { toastOpts } from 'components/Layout';
import { Title, ContainerCSS } from '../components/MainContainerCSS';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { Loader } from 'components/Loader/Loader';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Helmet } from 'react-helmet';

export default function ContactsPage() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const selectedContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    if (!!error) {
      toast.error(error, toastOpts);
    }
    dispatch(fetchContacts());
  }, [dispatch, error]);

  return (
    <ContainerCSS>
      <Helmet>
        <title>Phone book</title>
      </Helmet>
      <ScrollToTop
        smooth
        top={100}
        component={<p style={{ color: 'blue' }}>UP</p>}
      />
      <Title>Adding new contact</Title>
      <Form />
      <Title>Contacts</Title>
      <Filter />
      {isLoading && <Loader />}
      {!!selectedContacts.length && (
        <ContactsList contacts={selectedContacts} />
      )}
    </ContainerCSS>
  );
}
