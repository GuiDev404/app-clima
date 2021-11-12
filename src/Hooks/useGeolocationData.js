import { useState, useEffect } from 'react'
import useCoordenadas from './useCoordenadas'
import fetchingData from '../service/fetchingData';
import {KEY, BASE_URL} from '../service/keys';

function useGeolocationData () {
  let { coordenadas, isLoading, error } = useCoordenadas();
  let [ isReady, setIsReady ] = useState(false);
  let [ data, setData ] = useState(null);

  const dataForCoordinates = async (URL)=> {
    let data = await fetchingData(URL);
    
    if(data){
      setIsReady(true);
      setData(data);
    }
  }

  useEffect(()=> {
    if(!isLoading){
      let URL = !error 
        ? `${BASE_URL}?lat=${coordenadas.latitud}&lon=${coordenadas.longitud}&appid=${KEY}`
        : `${BASE_URL}?q=Buenos Aires,Argentina&appid=${KEY}`;

      dataForCoordinates(URL);
    }
  }, [isLoading, coordenadas, error])

  return {
    isReady,
    data
  }
}

export default useGeolocationData