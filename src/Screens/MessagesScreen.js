import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../Components';
import {MessageData} from '../Utils/MockData';
import MessageCard from '../Components/MessageCard';

const MessagesScreen = ({navigation}) => {
  const renderItem = ({item, index}) => {
    return <MessageCard item={item} index={index} />;
  };
  return (
    <View style={{flex: 1}}>
      <Header
        headerName="Berichten"
        onLeftIconPress={() => {
          navigation.goBack();
        }}
      />
      <FlatList data={MessageData} renderItem={renderItem} />
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
