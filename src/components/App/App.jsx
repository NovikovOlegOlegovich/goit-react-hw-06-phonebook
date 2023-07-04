import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Title from '../Title';
import { Wrapper } from './App.styled';
import { addContact, deleteContact } from '../../redux/contacts/slice';
import { addFilter } from '../../redux/filter/slice';

const App = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);

  const checkUnicName = currentName => {
    return contacts.find(contact => contact.name === currentName);
  };

  const formSubmitHendler = data => {
    const { name } = data;
    if (checkUnicName(name)) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact(data));
  };

  const handledeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filterHendler = ({ currentTarget }) => {
    const filter = currentTarget.value;
    dispatch(addFilter(filter));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm formSubmitHendler={formSubmitHendler} />
      <Title>Contacts</Title>
      <Filter filterHendler={filterHendler} />
      <ContactList
        contacts={visibleContacts}
        ondDeleteContact={handledeleteContact}
      />
    </Wrapper>
  );
};

export default App;
