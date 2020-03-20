import * as types from '../../constants/actionTypes';

const initialState = {
  currentCity: '',
  weatherData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.city,
      };

    case types.SET_CITY_WEATHER:
      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      const {title: cityName, consolidated_weather: data} = action.data;

      const weatherData = data.map((item, idx) => {
        const day = new Date(item.applicable_date);

        return {
          id: item.id,
          day: day.getDate(),
          month: months[day.getMonth()],
          dayOfWeek: days[day.getDay()],
          temp: item.the_temp.toFixed(0),
          windSpeed: item.wind_speed.toFixed(0),
          windDirection: item.wind_direction.toFixed(0),
          humidity: item.humidity.toFixed(0),
          weatherStateAbbr: item.weather_state_abbr,
          weatherStateName: item.weather_state_name,
        };
      });

      return {
        ...state,
        weatherData: {
          cityName,
          weatherData,
        },
      };
  }
  return state;
};
