import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const lightOn = require('./assets/icons/eco-light.png');
  const lightOff = require('./assets/icons/eco-light-off.png');

  const logoDio = require('./assets/icons/logo-dio.png');
  const logoDioWhite = require('./assets/icons/logo-dio-white.png');

  const handleSetToggle = () => {
    setToggle(oldToggle => !oldToggle);
  };

  useEffect(() => {
    // Liga o flash do celular
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <TouchableOpacity onPress={handleSetToggle}>
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
