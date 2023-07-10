import React from 'react';
import ContactForm from './ContactForm';
import ContactFilter from './ContactFilter';
import ContactList from './ContactList';
import { MainTitle } from './App.styled';
function App() {
  return (
    <section>
      <ContactForm />
      <div>
        <MainTitle>Contacts</MainTitle>
        <ContactFilter />
        <ContactList />
      </div>
    </section>
  );
}
export default App;
