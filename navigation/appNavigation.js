import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AuthScreen from '../sreens/AuthScreen';
import MainScreen from '../sreens/MainScreen';

const CompanyNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Auth: AuthScreen,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(CompanyNavigator);
