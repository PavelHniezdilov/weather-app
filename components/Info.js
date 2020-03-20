import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import TextMain from './TextMain';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import WeatherState from './WeatherState';

const Info = props => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.content}>
        <View style={styles.topBox}>
          <View style={styles.iconBox}>
            <WeatherState state={props.weatherStateAbbr} sizeIcon={50} />
          </View>
          <View style={styles.dataCol}>
            <TextMain style={styles.textCity}>{props.city}</TextMain>
            <View style={styles.dataBox}>
              <TextMain style={styles.textData}>
                {props.dayOfWeek}, {props.month} {props.day}
              </TextMain>
            </View>
          </View>
        </View>
        <View style={styles.tempBox}>
          <TextMain style={styles.temp}>{props.temp}&deg;</TextMain>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.infoCol}>
            <TextMain style={styles.info}>{props.windSpeed}mph</TextMain>
          </View>
          <View style={styles.infoCol}>
            <Icon
              name="arrow-up-circle-outline"
              size={23}
              color={Colors.main_text}
              style={{transform: [{rotate: `${props.windDirection}deg`}]}}
            />
            <TextMain style={{...styles.info, marginLeft: 5}}>
              wind dir
            </TextMain>
          </View>
          <View style={styles.infoCol}>
            <Icon name="water-outline" size={25} color={Colors.main_text} />
            <TextMain style={styles.info}>{props.humidity}%</TextMain>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

Info.propTypes = {
  city: PropTypes.string,
  day: PropTypes.number,
  dayOfWeek: PropTypes.string,
  humidity: PropTypes.string,
  month: PropTypes.string,
  temp: PropTypes.string,
  windDirection: PropTypes.string,
  windSpeed: PropTypes.string,
  weatherStateAbbr: PropTypes.string,
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  topBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBox: {
    marginRight: 10,
  },
  dataCol: {
    marginLeft: 10,
  },
  dataBox: {
    marginTop: 10,
  },
  textCity: {
    fontSize: 24,
    textTransform: 'uppercase',
  },
  textData: {
    fontSize: 14,
    textTransform: 'uppercase',
  },
  tempBox: {
    marginTop: 50,
    marginBottom: 50,
  },
  temp: {
    fontSize: 175,
  },
  infoBox: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoCol: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    fontSize: 18,
  },
});

export default Info;
