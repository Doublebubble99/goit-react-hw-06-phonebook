import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import ContactFilter from './ContactFilter';
import ContactList from './ContactList';
import { MainTitle } from './App.styled';
function App() {
  const [contacts, setContacts] = useState(() =>
    JSON.parse(localStorage.getItem('contacts') || [])
  );
  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const handleChangeFilter = evt => {
    const target = evt.target;
    setFilter(target.value);
  };
  const addContact = data => {
    const item = { ...data, id: nanoid() };
    const isExistingName = contacts.find(({ name }) => name === data.name);
    if (isExistingName) {
      alert(`${isExistingName.name} is already in contacts`);
      return;
    }
    setContacts(prevState => [...prevState, item]);
  };
  const handleRemoveItem = ({ target }) => {
    setContacts(prevState => prevState.filter(({ id }) => id !== target.id));
  };
  const filterNormalize = filter.toLowerCase();
  const existingName = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filterNormalize.trim());
  });
  return (
    <section>
      <ContactForm addContact={addContact} />
      <div>
        <MainTitle>Contacts</MainTitle>
        <ContactFilter
          filter={filter}
          handleChangeFilter={handleChangeFilter}
        />
        <ContactList existingName={existingName} onRemove={handleRemoveItem} />
      </div>
    </section>
  );
}
export default App;
