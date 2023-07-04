import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Title from '../Title';
import { Wrapper } from './App.styled';

const App = () => {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

export default App;
