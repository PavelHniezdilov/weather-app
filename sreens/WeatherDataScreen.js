import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Button,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as weatherActions from '../store/actions/weather';
import Colors from '../constants/Colors';
import Info from '../components/Info';
import InfoWeek from '../components/InfoWeek';
import BackgroundImage from '../components/BackgroundImage';
import TextMain from '../components/TextMain';

const WeatherDataScreen = props => {
  const cityId = props.navigation.getParam('data');
  const [isActiveDate, setIsActiveDate] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const {cityName, weatherData} = useSelector(
    state => state.weather.weatherData,
  );
  const dispatch = useDispatch();

  const loadWeatherData = useCallback(async () => {
    setError(null);
    try {
      await dispatch(weatherActions.fetchWeatherData(cityId));
    } catch (err) {
      setError(err.message);
    }
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadWeatherData().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadWeatherData]);

  if (error) {
    return (
      <BackgroundImage>
        <View style={styles.centered}>
          <Text>An error occurred!</Text>
          <Button title="Try again" onPress={loadWeatherData} />
        </View>
      </BackgroundImage>
    );
  }

  if (isLoading) {
    return (
      <BackgroundImage>
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={Colors.spinner} />
        </View>
      </BackgroundImage>
    );
  }

  if (!weatherData) {
    return (
      <BackgroundImage>
        <View style={styles.centered}>
          <TextMain>No data</TextMain>
        </View>
      </BackgroundImage>
    );
  }

  if (isActiveDate === null) {
    setIsActiveDate(weatherData[0].id);
  }

  let currentId = weatherData.findIndex(elem => {
    return elem.id === isActiveDate;
  });

  if (currentId === -1) {
    currentId = 0;
  }

  const currentData = weatherData[currentId];

  const noActiveData = weatherData.filter((item) => {
    return item.id !== isActiveDate;
  });

  const bgColors = ['#cca7cb', '#c39bc4', '#b485b7', '#a874ad'];

  const weeklyData = noActiveData.slice(0, 4).map((item, idx) => {
    return (
      <InfoWeek
        key={idx}
        style={{backgroundColor: bgColors[idx]}}
        dayOfWeek={item.dayOfWeek}
        weatherStateAbbr={item.weatherStateAbbr}
        temp={item.temp}
        onPress={() => setIsActiveDate(item.id)}
      />
    );
  });

  return (
    <BackgroundImage>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.centered}>
          <View style={styles.infoWrap}>
            <Info
              city={cityName}
              day={currentData.day}
              dayOfWeek={currentData.dayOfWeek}
              humidity={currentData.humidity}
              month={currentData.month}
              temp={currentData.temp}
              windDirection={currentData.windDirection}
              windSpeed={currentData.windSpeed}
              weatherStateAbbr={currentData.weatherStateAbbr}
            />
          </View>
          <View style={styles.weekWrap}>{weeklyData}</View>
        </View>
      </SafeAreaView>
    </BackgroundImage>
  );
};

WeatherDataScreen.propTypes = {};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoWrap: {
    flex: 1,
  },
  weekWrap: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default WeatherDataScreen;
