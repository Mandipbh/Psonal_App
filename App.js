import {Alert, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigator from './src/Navigation/AppNavigator';
import SettingScreen from './src/Screens/SettingScreen';
import {theme} from './src/Utils';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor={theme.colors.primary} />
      <AppNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
