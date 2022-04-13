/* eslint-disable */
import React, { useState } from 'react';
import useForm from '../../common/useForm';
import { validateForm } from '../Validate';
import { FormInner } from './Styles';
import { MainBtn, FieldError } from '../../AppStyles';

const AddQuestion = ({ addQuestion }) => {
  const [values, setValues] = useState({
    body: '', name: '', email: ''
  });

  const { handleChange, handleSubmit, errors } = useForm(values, setValues, addQuestion, validateForm);

  return (
    <form onSubmit={handleSubmit}>
      <FormInner>
        <label htmlFor="">Question</label>
        <input
          type="text"
          name="body"
          value={values.body}
          onChange={handleChange}
          placeholder="Ask your question here"
        />
        { errors.body && <FieldError>{errors.body}</FieldError> }
        <label htmlFor="">Nickname</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Example: jackson11!"
        />
        { errors.name && <FieldError>{errors.name}</FieldError> }
        <p>For privacy reasons, do not use your full name or email address</p>
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Why did you like the product or not?"
        />
        { errors.email && <FieldError>{errors.email}</FieldError> }
        <p>For authentication reasons, you will not be emailed</p>
        <MainBtn type="submit">Add</MainBtn>
      </FormInner>
    </form>
  );
}
export default AddQuestion;