import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Text 1234567890</Text>
      <Icon name="rocket" size={30} color="#900" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontFamily: 'HelveticaNeueCyr-Thin',
  },
});
