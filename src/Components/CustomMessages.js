import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './Header';
import LinearGradient from 'react-native-linear-gradient';

const CustomMessages = props => {
  const {massageName} = props;
  return (
    <View style={{flex: 1}}>
      <Header headerName="Berichten" />
      <View style={{backgroundColor: '#eeeeed', margin: 15, borderRadius: 20}}>
        <LinearGradient
          style={{
            borderRadius: 10,
            padding: 5,
            paddingVertical: 17,
          }}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#5d92f8', '#bd808b']}>
          <Text style={{paddingLeft: 20, color: '#fff', fontSize: 24}}>
            {massageName}
          </Text>
        </LinearGradient>
        <Text style={{padding: 20}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </Text>
      </View>
    </View>
  );
};

export default CustomMessages;

const styles = StyleSheet.create({});
