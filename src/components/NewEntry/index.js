/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import newEntryThunk from '../../thunk/newEntryThunk';


function NewEntry() {
  // const regExpID = /^(\(?\+?[1-9]*\)?)?[0-9_\- \(\)]*$/gi;
  // const regExpName = /^(\(?\+?[\D]*\)?)?[\D_\- \(\)]*$/gi;
  // const regExpAge = /^[1-9][0-9]?$|^[1][0-5][0-9]?$/gi;
  // const regExpPhone = /^((\+7|7|8)+([0-9]{3}|\([0-9]{3}\)|\s[0-9]{3}\s)+([0-9]{7}|[0-9]{3}\-[0-9]{2}\-[0-9]{2}|[0-9]{7}|[0-9]{3}\s[0-9]{2}\s[0-9]{2}))$/gi;
  // const regExpEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gi;

  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    id: '',
    name: '',
    age: '',
    phone: '',
    email: '',
  });
  const { id, name, age, phone, email } = inputs;

  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line max-len
    dispatch(newEntryThunk(event.target.id.value, event.target.name.value, event.target.age.value, event.target.phone.value, event.target.email.value));
  }

  return (
    <>
      <Form inline onSubmit={handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="id" className="mr-sm-2">ID</Label>
          <Input type="text" name="id" id="id" placeholder="Only numbers" value={id} onChange={handleChange} required
            pattern="^(\(?\+?[1-9]*\)?)?[0-9_\- \(\)]*$" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="Name" className="mr-sm-2">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Only letters" value={name} onChange={handleChange} required 
          pattern="^(\(?\+?[\D]*\)?)?[\D_\- \(\)]*$" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="Age" className="mr-sm-2">Age</Label>
          <Input type="text" name="age" id="age" placeholder="Only numbers" value={age} onChange={handleChange} required 
          pattern="^[1-9][0-9]?$|^[1][0-5][0-9]?$"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="Phone" className="mr-sm-2">Phone</Label>
          <Input type="text" name="phone" id="phone" placeholder="+7(977)123-12-12" value={phone} onChange={handleChange} required pattern="^((\+7|7|8)+([0-9]{3}|\([0-9]{3}\)|\s[0-9]{3}\s)+([0-9]{7}|[0-9]{3}\-[0-9]{2}\-[0-9]{2}|[0-9]{7}|[0-9]{3}\s[0-9]{2}\s[0-9]{2}))$"/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="email" className="mr-sm-2">E-mail</Label>
          <Input type="text" name="email" id="email" placeholder="E-mail" value={email} onChange={handleChange} required 
          pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  );
}

export default NewEntry;
