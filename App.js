import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const App = () => {
  const toggle = false;

  const lightOn = require('./assets/icons/eco-light.png');
  const lightOff = require('./assets/icons/eco-light-off.png');

  const logoDio = require('./assets/icons/logo-dio.png');
  const logoDioWhite = require('./assets/icons/logo-dio-white.png');

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Image
          style={toggle ? styles.lightBulbOn : styles.lightBulbOff}
          source={toggle ? lightOn : lightOff}
        />
        <Image
          style={styles.lightDio}
          source={toggle ? logoDio : logoDioWhite}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightBulbOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightBulbOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  lightDio: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});

export default App;
