/* eslint-disable */
import React, {useState, useRef, useEffect} from 'react';
import useForm from '../../common/useForm';
import { validateAnswer } from './ValidateAnswer';
import {FormInner, Thumbnail} from './Styles';


const AddPhotos = ({handlePhotos}) => {
  const [photo, setPhoto] = useState('');

  const handleChange = e =>{
    setPhoto(e.target.value);
  }
  console.log(photo)
  return (
    <div>
      <input type="text" name="photo" value={photo} onChange={handleChange} />
      <button type="button" onClick={()=>handlePhotos(photo)}>Upload</button>
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

  const handlePhotos = photo => {
    if (/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(photo)) {
      setValues({
        ...values,
        photos: [...values.photos, photo]
      })
    }
  }

  const finalSubmit = values => {

  }

  const {handleChange, handleSubmit, errors} = useForm(values, setValues, finalSubmit, validateAnswer);
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
        {values.photos.length>0 && values.photos.map(photo=>(
          <Thumbnail key={photo} photo={photo} />
        ))}
        <button>Add</button>
      </FormInner>
    </form>
  )
}

export default AddAnswer;