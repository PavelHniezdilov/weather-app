import * as Api from '../../api/api';
import * as types from '../../constants/actionTypes';

export const fetchCurrentCity = (latt, long) => {
  return async dispatch => {
    try {
      const resData = await Api.getCurrentCity(latt, long);

      dispatch({type: types.SET_CURRENT_CITY, city: resData});
    } catch (err) {
      throw err;
    }
  };
};

export const fetchWeatherData = city => {
  return async dispatch => {
    try {
      const resData = await Api.getCityWeather(city);

      dispatch({type: types.SET_CITY_WEATHER, data: resData});
    } catch (err) {
      throw err;
    }
  };
};
