import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';

const SplashScreen = (props) => {
  return (
    <View style={Styles.container}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          padding: 5,
          color: 'rgb(23, 206, 106)',
        }}>
        Liferithms{' '}
      </Text>
      <Text style={{ textAlign: 'center', color: 'rgb(41, 73, 72)' , fontSize  : 16}}>
        Liferithms is accelerating positive behavior change with the help of
        modern technology.
      </Text>
    </View>
  );
};

export default SplashScreen;

const Styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(235, 255, 244)',
    alignItems: 'center',
  },
});
