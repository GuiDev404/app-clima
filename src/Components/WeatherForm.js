import React from 'react';
import Emoji from './Emoji';

export default function WeatherForm({ handleChange, handleSubmit, errors }) {

  return (
    <div className="card card-body">
      <h1 className='mb-3 text-center'> 
        <strong>Heimdal ᛉ</strong>
        <Emoji emoji='' label='emoji reloj espera'/>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="ciudad" className='h5'>Ciudad</label>
          <input
            type="text"
            id='ciudad'
            onChange={handleChange}
            placeholder="Santa Fe"
            name="ciudad"
            className="form-control"
            autoFocus
          />
          {errors.ciudad && <span className='text-danger'> {errors.ciudad} </span> }
        </div>
        <div className="form-group">
          <label htmlFor="pais" className='h5'>Pais</label>
          <input
            type="text"
            id='pais'
            onChange={handleChange}
            placeholder="AR"
            name="pais"
            className="form-control"
          />
          {errors.pais && <span className='text-danger'> {errors.pais} </span> }
        </div>
        <div className="text-center">
          <button className="btn btn-dark btn-block" type="submit">
            Ver clima
          </button>
        </div>
      </form>
    </div>
  );
}
