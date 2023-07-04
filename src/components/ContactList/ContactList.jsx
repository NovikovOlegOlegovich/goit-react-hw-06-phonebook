import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';
import { getFilter } from '../../redux/filter/selectors';
import { deleteContact } from '../../redux/contacts/slice';

import {
  ContList,
  ContactItem,
  ContactDeskription,
  ContactButton,
} from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handledeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ContList>
      {visibleContacts?.map(contact => (
        <ContactItem key={contact.id}>
          <ContactDeskription>
            {contact.name} : {contact.number}
          </ContactDeskription>
          <ContactButton onClick={() => handledeleteContact(contact?.id)}>
            Delete
          </ContactButton>
        </ContactItem>
      ))}
    </ContList>
  );
};

export default ContactList;
