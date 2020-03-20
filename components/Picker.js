import React from 'react';
import {StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Colors from '../constants/Colors';

const Picker = props => {
  return (
    <RNPickerSelect
      {...props}
      style={{...pickerSelectStyles, placeholder: styles.placeholder}}
      useNativeAndroidPickerStyle={false}
    />
  );
};

const styles = StyleSheet.create({
  placeholder: {
    color: Colors.main_text,
    textAlign: 'center',
    fontSize: 30,
  },
  picker: {
    width: '80%',
    marginTop: 30,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 30,
    color: Colors.main_text,
    textAlign: 'center',
    fontFamily: 'HelveticaNeueCyr-Thin',
  },
  inputAndroid: {
    fontSize: 30,
    color: Colors.main_text,
    textAlign: 'center',
    fontFamily: 'HelveticaNeueCyr-Thin',
  },
});

export default Picker;
