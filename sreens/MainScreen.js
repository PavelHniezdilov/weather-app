import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Alert, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const MainScreen = props => {

  return (
    <View style={styles.wrap}>
      <Text>MainScreen</Text>
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
