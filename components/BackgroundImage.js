import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const BackgroundImage = props => {
  return (
    <ImageBackground
      source={require('../assets/imgs/bg.jpg')}
      style={styles.backgroundImage}>
      {props.children}
    </ImageBackground>
  );
};

BackgroundImage.propTypes = {
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});

export default BackgroundImage;
