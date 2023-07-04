import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/slice';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import {
  PhonebookForm,
  NameInput,
  Label,
  FormButton,
} from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const checkUnicName = currentName => {
    return contacts.find(contact => contact.name === currentName);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (checkUnicName(name)) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }
    const nameId = nanoid();
    dispatch(
      addContact({
        id: nameId,
        name,
        number,
      })
    );

    reset();
  };

  return (
    <PhonebookForm onSubmit={handleSubmit}>
      <Label>
        Name
        <NameInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={({ target }) => {
            setName(target.value);
          }}
        />
      </Label>
      <Label>
        Number
        <NameInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={({ target }) => {
            setNumber(target.value);
          }}
        />
      </Label>

      <FormButton type="submit">Add contact</FormButton>
    </PhonebookForm>
  );
};

export default ContactForm;
