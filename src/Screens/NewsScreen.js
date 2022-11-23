import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {CustomCard, Header} from '../Components';
import {NewsData, NSData} from '../Utils/MockData';

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
