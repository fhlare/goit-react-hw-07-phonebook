import { useDispatch, useSelector } from 'react-redux';
import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { useEffect } from 'react';
import { selectError, selectLoading } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>loading...</b>}
      <ContactList />
      <GlobalStyle />
    </Container>
  );
};
