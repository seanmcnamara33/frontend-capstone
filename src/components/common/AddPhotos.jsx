/* eslint-disable */
import React, {useState} from 'react';
import 'whatwg-fetch';

const AddPhotos = ({handlePhotos}) => {
  const [photo, setPhoto] = useState('');

  const handleChange = e =>{
    setPhoto(e.target.files[0]);
  }

  const addPhoto = async () => {
    const data = new FormData()
    data.append("file", photo)
    data.append("upload_preset", process.env.UPLOAD_PRESET);
    data.append("cloud_name", process.env.CLOUD_NAME);

    try {
      let res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,{
        method: 'POST',
        body: data
      })

      let result = await res.json();

      if (result) {
        handlePhotos(result.url);
        setPhoto('');
      }
    } catch (err) {
      console.log('CLOUDINARY SEND', err)
    }
  }

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button type="button" onClick={addPhoto}>Upload</button>
    </div>
  )
}

export default AddPhotos;