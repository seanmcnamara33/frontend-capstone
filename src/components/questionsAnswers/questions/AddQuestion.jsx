/* eslint-disable */
import React, {useState} from 'react';
import useForm from '../../common/useForm';
import validateQuestion from './ValidateQuestion';
import {FormInner} from './Styles';

const AddQuestion = () => {
  const [values, setValues] = useState({
    question: '', nickname: '', email: ''
  });

  const sendQuestion = () =>{
    console.log('MAKE CALL', values);
    console.log('Errors', errors);
  }

  const {handleChange, handleSubmit, errors} = useForm(values, setValues, sendQuestion, validateQuestion);

  return (
    <form onSubmit={handleSubmit}>
      <FormInner>
        <label htmlFor="">Question</label>
        <input
          type="text"
          name="question"
          value={values.question}
          onChange={handleChange}
        />
        <label htmlFor="">Nickname</label>
        <input
          type="text"
          name="nickname"
          value={values.nickname}
          onChange={handleChange}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </FormInner>
    </form>
  );
}
export default AddQuestion;