import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Header} from '../Components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {theme} from '../Utils';

const SettingScreen = ({navigation}) => {
  const data = [
    {
      id: '1',
      name: 'Account',
      iconName: 'user-circle',
    },
    {
      id: '2',
      name: 'Notificaties',
      iconName: 'bell',
    },
    {
      id: '3',
      name: 'Beveiliging',
      iconName: 'shield',
    },
    {
      id: '4',
      name: 'Ondersteuning',
      iconName: 'question-circle',
    },
    {
      id: '5',
      name: 'Over ons',
      iconName: 'info-circle',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: '#fcfcfc',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 18,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name={item.iconName} size={22} />
          <Text style={{left: 20, fontSize: 20}}>{item.name}</Text>
        </View>
        <TouchableOpacity>
          <Icon name="angle-right" size={25} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.white}}>
      <Header
        headerName="Instellingen"
        onLeftIconPress={() => {
          navigation.goBack('Tabs');
        }}
      />

      <View style={{margin: 20}}>
        <FlatList data={data} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
