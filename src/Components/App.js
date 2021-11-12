import React from "react";
import Loader from '../Components/Loader'

import WeatherForm from "./WeatherForm";
import WeatherResult from "./WeatherResult";

import useForm from "../Hooks/useForm";
import useGeolocationData from "../Hooks/useGeolocationData";

function App() {
  let { isReady, data } = useGeolocationData();
  let { handleChange, handleSubmit, values, formData, errors } = useForm();

  return (
    <>
      {(isReady && data) ? (
        <div className="container p-4 mt-4">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <WeatherForm
                handleChange={handleChange}
                errors={errors}
                values={values}
                handleSubmit={handleSubmit}
              />
              {formData
                ? <WeatherResult infoClima={formData} />
                : <WeatherResult infoClima={data} />
              }
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
