import React from 'react';
import {
  View,
  Alert,
  Button,
  StyleSheet,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker} from 'react-native-maps';

export default class LocationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      coordinates: [],
    };
  }

  requestCameraPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Get Permission',
            message: 'For work this app need fine location permission',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use fine location');
        } else {
          console.log('Fine location denied');
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

  getPlace = () => {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        });
      },
      error => {
        Alert.alert(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      },
    );
  };

  componentDidMount() {
    this.requestCameraPermission();
    this.getPlace();
  }

  moveToCity = () => {
    this.props.navigation.navigate('City', {
      data: {
        latitude: this.state.latitude,
        longitude: this.state.longitude,
      },
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}
          />
        </MapView>
        <View style={styles.btn}>
          <View style={styles.btnCol}>
            <Button title="Go to choose city" onPress={this.moveToCity} />
          </View>
          {Platform.OS === 'android' && (
            <View style={styles.btnCol}>
              <Button title="Check place" onPress={this.getPlace} />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnCol: {
    marginHorizontal: 5,
  },
});
