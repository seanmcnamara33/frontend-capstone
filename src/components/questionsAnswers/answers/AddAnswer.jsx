/* eslint-disable */
import React, {useState, useRef, useEffect} from 'react';
import useForm from '../../common/useForm';
import {validateAnswer} from './ValidateAnswer';
import {FormInner} from './Styles';

const AddAnswer = () =>{
  const [values, setValues] = useState({
    body: '',
    name: '',
    email: '',
    photos: []
  });
  const fileInput = useRef();

  const sub = () => {
    console.log(values);
  }

  const fileUploads = () =>{
    console.log(fileInput)
  }

  useEffect(()=>{
    fileUploads();
  },[fileInput])

  const {handleChange, handleSubmit, errors} = useForm(values, setValues, sub, validateAnswer);
  // /qa/questions/:question_id/answers
  return (
    <form onSubmit={handleSubmit}>
      <FormInner>
        <label htmlFor="">Answer</label>
        <input
          type="text"
          name="body"
          value={values.body}
          onChange={handleChange}
        />
        <label htmlFor="">Nickname</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          values={values.email}
          onChange={handleChange}
        />
        <label htmlFor="">Upload Photos</label>
        <input
          type="file"
          ref={fileInput}
        />
        <button>Add</button>
      </FormInner>
    </form>
  )
}

export default AddAnswer;