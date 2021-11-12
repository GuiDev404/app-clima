import React from 'react'
import Emoji from './Emoji';

const ERRORS = {
  'city not found': 'La ciudad de no existe'
}

function WeatherResult( { infoClima } ) {
  if(!infoClima) return '';

  return typeof infoClima === "string" ? (
    <p className="lead my-2 bg-light p-3 text-center">
      {ERRORS[infoClima.trim()] || infoClima}
      <Emoji emoji='😞😞' label="emoji decepcion not-found" styles={"pr-2"}/>
    </p>
  ) : (
    <div className="my-2 bg-light px-3 pt-4">
      <p className='mb-4 lead'>Asi esta el clima: </p>
      <p>
        <Emoji emoji='📍' label="emoji ubicacion" styles="pr-2" />
        <b>Localizacion:</b> {infoClima.name}, {infoClima.sys.country}
      </p>
      <p>
        <Emoji emoji='🌡️' label="emoji temperatura" styles="pr-2" />
        <b>Temperatura:</b> 
        {(infoClima.main.temp - 273.15).toFixed(2)} °C,{" "}
        {infoClima.weather[0].description}
      </p>
      <p>
        <Emoji emoji='💨' label="emoji viento" styles="pr-2" />
        <b>Velocidad del Viento:</b> {infoClima.wind.speed} km/h
      </p>
      <p>
        <Emoji emoji='💧' label="emoji humedad" styles="pr-2" />
        <b>Humedad:</b> {infoClima.main.humidity} %
      </p>
    </div>
  );
}

export default React.memo(WeatherResult);