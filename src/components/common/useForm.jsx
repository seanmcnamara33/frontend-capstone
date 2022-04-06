/* eslint-disable */
import React, {useState, useEffect} from 'react';

const useForm = (values, setValues, callback, validate) => {
  const [errors, setErrors] = useState({});
  const [sendIt, setSendIt] = useState(false);

  const handleChange = e => {
    const {name, value} = e.target;

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    setSendIt(true);
    setErrors(validate(values))
  }

  useEffect(()=>{
    if(Object.keys(errors).length === 0 && sendIt) {
      callback();
    }
  }, [errors])

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  }
}
export default useForm;