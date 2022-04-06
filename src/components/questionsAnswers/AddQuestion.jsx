/* eslint-disable */
import React, {useState} from 'react';
import useForm from './useForm';
import validateQuestion from './ValidateQuestion';

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
    <form>
      <input
        type="text"
        name="question"
        value={values.question}
        onChange={handleChange}
      />
      <input
        type="text"
        name="nickname"
        value={values.nickname}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default AddQuestion;