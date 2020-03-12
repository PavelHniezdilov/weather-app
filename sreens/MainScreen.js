import React, {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Button, View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const MainScreen = props => {
  const [error, setError] = useState('');
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      pos => {
        setError('');
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      e => setError(e.message),
    );
  }, []);

  return (
    <View style={styles.wrap}>
      {error ? (
        <Text>Error retrieving current position</Text>
      ) : (
        <>
          <Text>Latitude: {position.latitude}</Text>
          <Text>Longitude: {position.longitude}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;
