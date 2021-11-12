import { useState, useEffect } from 'react';

export default function useCoordenadas() {
  const [ coordenadas, setCoordenadas ] = useState({ 
    latitud: null,
    longitud: null
  });
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError ] = useState(false)
  
  useEffect(() => {

    let geoID = window.navigator.geolocation.getCurrentPosition(pos=> {

      setCoordenadas({
        latitud: pos.coords.latitude,
        longitud: pos.coords.longitude
      })
      setError(false)
      setIsLoading(false);

    }, function (error) {
      setError(true)
      setIsLoading(false);
    })

    return () => {
      window.navigator.geolocation.clearWatch(geoID);
    }
  }, [])

  return {
    coordenadas,
    isLoading,
    error
  }
}
