/* eslint-disable */
import React, {useState} from 'react';
import useForm from '../../common/useForm';
import validateQuestion from './ValidateQuestion';
import {FormInner} from './Styles';

const AddQuestion = ({addQuestion}) => {
  const [values, setValues] = useState({
    body: '', name: '', email: ''
  });

  const {handleChange, handleSubmit, errors} = useForm(values, setValues, addQuestion, validateQuestion);

  return (
    <form onSubmit={handleSubmit}>
      <FormInner>
        <label htmlFor="">Question</label>
        <input
          type="text"
          name="body"
          value={values.body}
          onChange={handleChange}
        />
        {errors.body && <h5>{errors.body}</h5>}
        <label htmlFor="">Nickname</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Example: jackson11!"
        />
        {errors.name && <h5>{errors.name}</h5>}
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Why did you like the product or not?"
        />
        <p>For authentication reasons, you will not be emailed</p>
        {errors.email && <h5>{errors.email}</h5>}
        <button type="submit">Add</button>
      </FormInner>
    </form>
  );
}
export default AddQuestion;