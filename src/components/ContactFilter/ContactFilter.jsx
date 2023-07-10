import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Label, Input } from './ContactFilter.styled';
import { filters } from 'redux/selectors';
import { setFilters } from 'redux/filtersSlice/slice';
function ContactFilter() {
  const filtersState = useSelector(filters);
  const dispatch = useDispatch();
  return (
    <Container>
      <Label htmlFor="Filter">Find contacts by name</Label>
      <Input
        id="Filter"
        onChange={({ target }) => dispatch(setFilters(target.value))}
        value={filtersState}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </Container>
  );
}
export default ContactFilter;
