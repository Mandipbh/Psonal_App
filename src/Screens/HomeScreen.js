import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CustomCard} from '../Components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../Utils';
import {CourseData, HomeOptions, MessageData} from '../Utils/MockData';

const HomeScreen = ({navigation}) => {
  const renderItem = ({item, index}) => {
    return (
      <CustomCard
        item={item}
        onPress={() => {
          navigation.navigate(item.nav, {title: 'Courses', data: CourseData});
        }}
        index={index}
      />
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.white}}>
      <View
        style={{
          backgroundColor: theme.colors.primary,
          paddingVertical: wp(3),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: wp(3.5),
          paddingTop: Platform.OS === 'ios' ? wp(10) : wp(8),
        }}>
        <View>
          <Text
            style={{
              fontSize: wp(5),
              color: theme.colors.white,
            }}>
            Welkom John
          </Text>
          <Text style={{fontSize: wp(3), color: theme.colors.white}}>
            Check out here what you missed
          </Text>
        </View>
        <TouchableOpacity>
          <Icon
            name="mark-email-unread"
            size={wp(7)}
            color={theme.colors.white}
            onPress={() => {
              navigation.navigate('Comman', {
                title: 'Messages',
                data: MessageData,
              });
            }}
          />
        </TouchableOpacity>
      </View>

      <FlatList data={HomeOptions} renderItem={renderItem} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  flatListView: {
    backgroundColor: '#f5f6f7',
    borderRadius: 10,
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
  },
  linearView: {
    padding: 30,
    borderRadius: 10,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: 'center',
  },
  textlist: {
    color: '#002160',
    fontSize: 20,
    fontWeight: '700',
  },
});
