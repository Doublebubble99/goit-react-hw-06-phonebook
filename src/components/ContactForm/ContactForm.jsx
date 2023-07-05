import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { name, number } from 'redux/selectors';
import { setName } from 'redux/nameSlice/slice';
import { setNumber } from 'redux/numberSlice/slice';
import { nanoid } from 'nanoid';
function ContactForm({ addContact }) {
  const nameValue = useSelector(name);
  const numberValue = useSelector(number);
  const dispatch = useDispatch();
  const onInput = evt => {
    const targetName = evt.target.name;
    if (targetName === 'name') {
      dispatch(setName(evt.target.value));
    } else if (targetName === 'number') {
      dispatch(setNumber(evt.target.value));
    }
  };
  const onSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    addContact({
      number: numberValue,
      name: nameValue,
      id: nanoid(),
    });
    form.reset();
  };
  return (
    <Container>
      <Title>Phonebook</Title>
      <Form autoComplete="off" onSubmit={onSubmit}>
        <Wrapper>
          <Label htmlFor="Name">Name</Label>
          <Input
            value={nameValue}
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
            value={numberValue}
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
