import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import {CustomCard} from '../Components';
import {helthData} from '../Utils/MockData';

const HealthInsuranceScreen = ({navigation}) => {
  const renderItem = ({item, index}) => {
    return <CustomCard item={item} index={index} />;
  };
  return (
    <View style={{flex: 1}}>
      <Header
        headerName="Zorgverzeking"
        onLeftIconPress={() => {
          navigation.goBack();
        }}
      />
      <FlatList data={helthData} renderItem={renderItem} />
    </View>
  );
};

export default HealthInsuranceScreen;

const styles = StyleSheet.create({});
