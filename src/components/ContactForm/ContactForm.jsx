import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Button,
  Wrapper,
} from './ContactForm.styled';
function ContactForm({ addContact }) {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const onInput = evt => {
    const name = evt.target.name;
    if (name === 'name') {
      setName(evt.target.value);
    } else if (name === 'number') {
      setNumber(evt.target.value);
    }
  };
  const onSubmit = evt => {
    evt.preventDefault();
    addContact({
      number,
      name,
    });
    setName('');
    setNumber('');
  };
  return (
    <Container>
      <Title>Phonebook</Title>
      <Form autoComplete="off" onSubmit={onSubmit}>
        <Wrapper>
          <Label htmlFor="Name">Name</Label>
          <Input
            value={name}
            id="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onInput}
          />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="Number">Number</Label>
          <Input
            value={number}
            id="Number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onInput}
          />
        </Wrapper>
        <Button type="submit">Add contact</Button>
      </Form>
    </Container>
  );
}
export default ContactForm;
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
