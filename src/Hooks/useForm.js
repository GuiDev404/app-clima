import { useState, useEffect } from 'react'
import fetchingData from '../service/fetchingData';
import {KEY, BASE_URL} from '../service/keys';

export default function useForm() {
  let [ values, setValues ] = useState({});
  let [ formData, setFormData ] = useState(null);
  let [ isSubmiting, setIsSubmiting ] = useState(false);
  let [ errors, setError ] = useState({});

  useEffect(() => {
    async function doFetch() {
      if(isSubmiting){  
      
        if(values.ciudad && values.pais){
          let URL = `${BASE_URL}?q=${values.ciudad},${values.pais}&appid=${KEY}`;
          let data = await fetchingData(URL);
  
          setFormData(data);
          setError({});
        }else {
          let newErrors = {
            ciudad: values.ciudad ? false : 'La ciudad es requerida',
            pais: values.pais ? false : 'El pais es requerido',
          }

          setError(prevErrors=> ({...prevErrors, ...newErrors}))
        }

      }

      setIsSubmiting(false);
    }
  
    doFetch();

  }, [isSubmiting, values])

  const handleSubmit = async (e)=> {
    e.preventDefault();

    setIsSubmiting(true);
  }

  const handleChange = (e) =>{
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  return { handleChange, handleSubmit , values, formData, errors };
}
