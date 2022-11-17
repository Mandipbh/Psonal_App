import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigator from './src/Navigation/AppNavigator';
import SettingScreen from './src/Screens/SettingScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
