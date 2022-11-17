import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import CustomCard from '../Components/CustomCard';
import {helthData, PortalsData} from '../Utils/MockData';

const HealthInsuranceScreen = ({navigation}) => {
  const renderItem = ({item, index}) => {
    return <CustomCard item={item} index={index} />;
  };
  return (
    <View style={{flex: 1}}>
      <Header
        headerName="Health insurance"
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
