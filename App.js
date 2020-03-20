import 'react-native-gesture-handler';
import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import AppNavigator from './navigation/appNavigation';
import weatherReducer from './store/reducers/weather';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
  weather: weatherReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
