import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import Colors from '../constants/Colors';

const WeatherState = props => {
  if (props.state === 'sn') {
    return (
      <Icon
        name="weather-snowy"
        size={props.sizeIcon}
        color={Colors.main_text}
      />
    );
  }

  if (props.state === 'sl') {
    return (
      <Icon
        name="weather-snowy-rainy"
        size={props.sizeIcon}
        color={Colors.main_text}
      />
    );
  }

  if (props.state === 'h') {
    return (
      <Icon
        name="weather-hail"
        size={props.sizeIcon}
        color={Colors.main_text}
      />
    );
  }

  if (props.state === 't') {
    return (
      <IconIonicons
        name="ios-thunderstorm"
        size={props.sizeIcon}
        color={Colors.main_text}
      />
    );
  }

  if (props.state === 'hr') {
    return (
      <IconFontisto
        name="rains"
        size={props.sizeIcon}
        color={Colors.main_text}
      />
    );
  }

  if (props.state === 'lr') {
    return (
      <IconFontisto
        name="rain"
        size={props.sizeIcon}
        color={Colors.main_text}
      />
    );
  }

  if (props.state === 's') {
    return (
      <IconFontisto
        name="day-rain"
        size={props.sizeIcon}
        color={Colors.main_text}
      />
    );
  }

  if (props.state === 'hc') {
    return (
      <IconFontisto
        name="cloudy"
        size={props.sizeIcon}
        color={Colors.main_text}
      />
    );
  }

  if (props.state === 'lc') {
    return (
      <IconFontisto
        name="day-cloudy"
        size={props.sizeIcon}
        color={Colors.main_text}
      />
    );
  }

  if (props.state === 'c') {
    return (
      <IconFontisto
        name="day-sunny"
        size={props.sizeIcon}
        color={Colors.main_text}
      />
    );
  }

  return (
    <IconFontisto
      name="slightly-smile"
      size={props.sizeIcon}
      color={Colors.main_text}
    />
  );
};

WeatherState.propTypes = {
  state: PropTypes.string,
  sizeIcon: PropTypes.number,
};

export default WeatherState;
