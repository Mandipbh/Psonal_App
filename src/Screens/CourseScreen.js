import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import {CourseData} from '../Utils/MockData';
import {MessageCard} from '../Components';

const CourseScreen = ({navigation}) => {
  const renderItem = ({item, index}) => {
    return <MessageCard item={item} index={index} />;
  };
  return (
    <View style={{flex: 1}}>
      <Header
        headerName="Courses"
        onLeftIconPress={() => {
          navigation.goBack();
        }}
      />
      <FlatList data={CourseData} renderItem={renderItem} />
    </View>
  );
};

export default CourseScreen;

const styles = StyleSheet.create({});
