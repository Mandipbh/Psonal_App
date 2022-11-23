import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import {MessageCard} from '../Components'
import {useNavigation} from '@react-navigation/native';

const CommanScreen = props => {
  const navigation = useNavigation();
  const {title, data} = props.route.params;
  const renderItem = ({item, index}) => {
    return <MessageCard item={item} index={index} />;
  };
  return (
    <View style={{flex: 1}}>
      <Header
        headerName={title}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
      />
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default CommanScreen;

const styles = StyleSheet.create({});
