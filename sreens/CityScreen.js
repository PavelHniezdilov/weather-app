import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  Platform,
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as weatherActions from '../store/actions/weather';
import Colors from '../constants/Colors';
import Picker from '../components/Picker';
import TextMain from '../components/TextMain';
import BackgroundImage from '../components/BackgroundImage';
import Btn from '../components/Btn';

const CityScreen = props => {
  const {latitude, longitude} = props.navigation.getParam('data');

  const [isChooseCity, setIsChooseCity] = useState(false);
  const [isSelectedCity, setIsSelectedCity] = useState(null);

  const currentCity = useSelector(state => state.weather.currentCity);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const loadCity = useCallback(async () => {
    setError(null);

    try {
      await dispatch(weatherActions.fetchCurrentCity(latitude, longitude));
    } catch (err) {
      setError(err.message);
    }
  }, [dispatch, setError, latitude, longitude]);

  useEffect(() => {
    setIsLoading(true);
    loadCity().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadCity]);

  if (error) {
    return (
      <BackgroundImage>
        <View style={styles.centered}>
          <Text>An error occurred!</Text>
          <Button title="Try again" onPress={loadCity} />
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

  if (!currentCity) {
    return (
      <BackgroundImage>
        <View style={styles.centered}>
          <TextMain>No data</TextMain>
        </View>
      </BackgroundImage>
    );
  }

  const nearCity = currentCity[0];
  const chooseCityData = currentCity.map(item => {
    return {
      label: item.title,
      value: item.woeid,
    };
  });

  const moveToWeatherData = id => {
    props.navigation.navigate('WeatherData', {
      data: id,
    });
  };

  if (isChooseCity) {
    return (
      <BackgroundImage>
        <View style={styles.centered}>
          <View style={styles.picker}>
            <Picker
              placeholder={{
                label: 'Select a city:',
                value: null,
              }}
              onValueChange={value => {
                setIsSelectedCity(value);

                if (Platform.OS !== 'ios' && value) {
                  moveToWeatherData(value);
                }
              }}
              onDonePress={() => {
                if (isSelectedCity) {
                  moveToWeatherData(isSelectedCity);
                }
              }}
              items={chooseCityData}
            />
          </View>
        </View>
      </BackgroundImage>
    );
  }

  return (
    <BackgroundImage>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.centered}>
          <View>
            <TextMain style={styles.text}>
              Your city is {nearCity.title}?
            </TextMain>
            <View style={styles.btnBox}>
              <View style={styles.btnCol}>
                <Btn onPress={() => moveToWeatherData(nearCity.woeid)}>Yes</Btn>
              </View>
              <View style={styles.btnCol}>
                <Btn onPress={() => setIsChooseCity(true)}>No</Btn>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    fontSize: 24,
  },
  picker: {
    width: '50%',
  },
  btnBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  btnCol: {
    marginHorizontal: 20,
  },
});

export default CityScreen;
