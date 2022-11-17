import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import CustomCard from '../Components/CustomCard';
import {NewsData, NSData, PortalsData} from '../Utils/MockData';

const NewsScreen = ({navigation}) => {
  const renderItem = ({item, index}) => {
    return (
      <CustomCard
        item={item}
        index={index}
        onPress={() => {
          index === 2
            ? navigation.navigate('Comman', {title: 'NS strike', data: NSData})
            : null;
        }}
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <Header
        headerName="News"
        onLeftIconPress={() => {
          navigation.goBack();
        }}
      />
      <FlatList data={NewsData} renderItem={renderItem} />
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({});
