import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import CityScreen from '../sreens/CityScreen';
import WeatherDataScreen from '../sreens/WeatherDataScreen';
import LocationScreen from '../sreens/LocationScreen';

const CompanyNavigator = createStackNavigator(
  {
    Location: LocationScreen,
    City: CityScreen,
    WeatherData: WeatherDataScreen,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(CompanyNavigator);
