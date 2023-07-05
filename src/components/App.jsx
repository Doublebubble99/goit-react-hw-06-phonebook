import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm';
import ContactFilter from './ContactFilter';
import ContactList from './ContactList';
import { MainTitle } from './App.styled';
import { contacts, filters } from 'redux/selectors';
import { setFilters } from 'redux/filtersSlice/slice';
import { newContact, removeContact } from 'redux/contactsSlice/slice';
function App() {
  const contactsState = useSelector(contacts);
  const filtersState = useSelector(filters);
  const dispatch = useDispatch();
  const handleChangeFilter = evt => {
    const target = evt.target;
    dispatch(setFilters(target.value));
  };
  const addContact = data => {
    const { name, number, id } = data;
    const isExistingName = contactsState.find(({ name }) => name === data.name);
    if (isExistingName) {
      alert(`${isExistingName.name} is already in contacts`);
      return;
    }
    dispatch(newContact({ name, number, id }));
  };
  const handleRemoveItem = ({ target }) => {
    dispatch(removeContact(target.id));
  };
  const filterNormalize = filtersState.toLowerCase();
  const existingName = contactsState.filter(({ name }) => {
    return name.toLowerCase().includes(filterNormalize.trim());
  });
  return (
    <section>
      <ContactForm addContact={addContact} />
      <div>
        <MainTitle>Contacts</MainTitle>
        <ContactFilter
          filter={filtersState}
          handleChangeFilter={handleChangeFilter}
        />
        <ContactList existingName={existingName} onRemove={handleRemoveItem} />
      </div>
    </section>
  );
}
export default App;
