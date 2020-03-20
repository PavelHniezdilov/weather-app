const apiUrl = 'https://www.metaweather.com/';

export function getCurrentCity(latt, long) {
  return callApi(`/api/location/search/?lattlong=${latt},${long}`);
}

export function getCityWeather(id) {
  return callApi(`/api/location/${id}/`);
}

// Private functions

function callApi(endpoint = {method: 'get'}) {
  const url = `${apiUrl}/${endpoint}`;

  return fetch(url)
    .then(res => {
      // console.log(res)
      return res.text();
    })
    .then(text => {
      // debugger
      if (text === 'OK') {
        return [];
      }
      if (text.length === 0) {
        return [];
      }
      return JSON.parse(text);
    });
}
