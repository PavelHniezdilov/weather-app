import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import TextMain from './TextMain';
import WeatherState from './WeatherState';

const InfoWeek = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp style={styles.wrap} onPress={props.onPress}>
      <View style={{...styles.content, ...props.style}}>
        <TextMain style={styles.day}>{props.dayOfWeek}</TextMain>
        <View style={styles.iconBox}>
          <WeatherState state={props.weatherStateAbbr} sizeIcon={25} />
        </View>
        <TextMain style={styles.temp}>{props.temp}&deg;</TextMain>
      </View>
    </TouchableCmp>
  );
};

InfoWeek.propTypes = {
  style: PropTypes.object,
  dayOfWeek: PropTypes.string,
  weatherStateAbbr: PropTypes.string,
  temp: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  wrap: {
    flexBasis: '25%',
  },
  content: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 5,
    flex: Platform.OS === 'ios' ? 0 : 1,
  },
  day: {
    fontSize: 16,
  },
  iconBox: {
    marginVertical: 15,
    height: 25,
  },
  temp: {
    fontSize: 25,
  },
});

export default InfoWeek;
