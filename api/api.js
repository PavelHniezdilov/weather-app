const apiUrl = 'https://pdl-app-abb6e.firebaseio.com/';

export function getCompanies(lng) {
  return callApi(`${lng}/companies.json`);
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
