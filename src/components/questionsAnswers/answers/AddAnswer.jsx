/* eslint-disable */
import React, {useState, useRef, useEffect, useContext} from 'react';
import 'whatwg-fetch';
import { ProductContext } from '../../context/Product';

import useForm from '../../common/useForm';
import { validateForm } from '../Validate';

import {FormInner, Thumbnail, PhotoList} from './Styles';

const AddPhotos = ({handlePhotos}) => {
  const [photo, setPhoto] = useState('');

  const handleChange = e =>{
    setPhoto(e.target.value);
  }

  const addPhoto = () => {
    handlePhotos(photo);
    setPhoto('');
  }

  return (
    <div>
      <input type="text" name="photo" value={photo} onChange={handleChange} />
      <button type="button" onClick={addPhoto}>Upload</button>
    </div>
  )
}


const AddAnswer = () =>{
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
    console.log(values, questionId)
    // POST /qa/questions/:question_id/answers
    try {
      if (questionId) {
        await fetch(`${process.env.API_URI}/qa/questions/${questionId}/answers`,{
          method: 'POST',
          body: JSON.stringify(values),
          headers: {'Content-Type': 'application/json', Authorization: process.env.API_KEY }
        });
      }
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
        />
        {errors.body && <p>{errors.body}</p>}
        <label htmlFor="">Nickname</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          values={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}

        <label htmlFor="">Upload Photos</label>
        {toggle ? <AddPhotos handlePhotos={handlePhotos}/> :
          <button type="button" onClick={()=>setToggle(!toggle)}>Add Photos</button>
        }
        <PhotoList>
          {
            values.photos.length>0 && values.photos.map(photo=>(
              <Thumbnail key={photo} photo={photo} />
            ))
          }
        </PhotoList>
        <button>Add</button>
      </FormInner>
    </form>
  )
}

export default AddAnswer;