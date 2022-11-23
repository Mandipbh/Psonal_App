import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {CustomCard, Header} from '../Components';
import {PortalsData} from '../Utils/MockData';

const PortalsScreen = ({navigation}) => {
  const renderItem = ({item, index}) => {
    return (
      <CustomCard
        item={item}
        index={index}
        onPress={() => {
          index === 0 ? navigation.navigate('Helth') : null;
        }}
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <Header
        headerName="Portals"
        onLeftIconPress={() => {
          navigation.goBack();
        }}
      />
      <FlatList data={PortalsData} renderItem={renderItem} />
    </View>
  );
};

export default PortalsScreen;

const styles = StyleSheet.create({});
