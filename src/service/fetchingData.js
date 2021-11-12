const getWeather = async (URL)=> {
  try {
    let response = await fetch(URL);
    let data = await response.json();

    if(data.message){
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return error.message;
  }
}
 
export default getWeather;