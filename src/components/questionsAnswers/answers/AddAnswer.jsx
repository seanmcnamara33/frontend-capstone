/* eslint-disable */
import React, {useState, useRef, useEffect, useContext} from 'react';
import 'whatwg-fetch';
import { ProductContext } from '../../context/Product';
import AddPhotos from '../../common/AddPhotos';
import useForm from '../../common/useForm';
import { validateForm } from '../Validate';
import { MainBtn, FieldError } from '../../AppStyles'

import {FormInner, Thumbnail, PhotoList} from './Styles';

const AddAnswer = ({handleAnswerModal}) =>{
  const [values, setValues] = useState({
    body: '',
    name: '',
    email: '',
    photos: []
  });
  const [toggle, setToggle] = useState(false);
  const { questionId } = useContext(ProductContext);

  const handlePhotos = photo => {
    if (photo!==''&& values.photos.length < 5) {
      setValues({
        ...values,
        photos: [...values.photos, photo]
      })
    }
  }

  const finalSubmit = async () => {
    try {
      if (questionId) {
        await fetch(`${process.env.API_URI}/qa/questions/${questionId}/answers`,{
          method: 'POST',
          body: JSON.stringify(values),
          headers: {'Content-Type': 'application/json', Authorization: process.env.API_KEY }
        });
      }
      handleAnswerModal();
    } catch (err) {
      console.log('POST ANSWER', err);
    }
  }

  const {handleChange, handleSubmit, errors} = useForm(values, setValues, finalSubmit, validateForm);

  return (
    <form onSubmit={handleSubmit}>
      <FormInner>
        <label htmlFor="">Answer</label>
        <input
          type="text"
          name="body"
          value={values.body}
          onChange={handleChange}
          placeholder="Add you answer here"
        />
        {errors.body && <FieldError>{errors.body}</FieldError>}
        <label htmlFor="">Nickname</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Example: jack543!"
        />
        {errors.name && <FieldError>{errors.name}</FieldError>}
        <p>For privacy reasons, do not use your full name or email address</p>
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          values={values.email}
          onChange={handleChange}
          placeholder="Example: jack@email.com"
        />
        {errors.email && <FieldError>{errors.email}</FieldError>}
        <p>For authentication reasons, you will not be emailed</p>
        <label htmlFor="">Upload Photos</label>
        {toggle ? <AddPhotos handlePhotos={handlePhotos}/> :
          <MainBtn type="button" onClick={()=>setToggle(!toggle)}>Add Photos</MainBtn>
        }
        <PhotoList>
          {
            values.photos.length > 0 && values.photos.map(photo=>(
              <Thumbnail key={photo} photo={photo} />
            ))
          }
        </PhotoList>
        <MainBtn>Add</MainBtn>
      </FormInner>
    </form>
  )
}

export default AddAnswer;