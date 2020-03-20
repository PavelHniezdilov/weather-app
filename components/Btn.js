import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../constants/Colors';

const Btn = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp onPress={props.onPress}>
      <View>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableCmp>
  );
};

Btn.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  text: {
    color: Colors.main_text,
    fontSize: 22,
    fontFamily: 'HelveticaNeueCyr-Thin',
  },
});

export default Btn;
