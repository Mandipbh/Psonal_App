import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../Utils';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const Header = props => {
  const navigation = useNavigation();
  const {headerName, onLeftIconPress, onRightIconPress} = props;
  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
        paddingVertical: widthPercentageToDP(3),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: widthPercentageToDP(3),
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.btnView} onPress={onLeftIconPress}>
          <Icon
            name="md-arrow-back"
            size={widthPercentageToDP(6)}
            color={theme.colors.white}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: widthPercentageToDP(5),
            color: theme.colors.white,
            marginLeft: widthPercentageToDP(1.2),
          }}>
          {headerName}
        </Text>
      </View>
      <TouchableOpacity onPress={onRightIconPress}>
        <Icon
          name="menu"
          size={widthPercentageToDP(6)}
          color={theme.colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  btnView: {
    padding: widthPercentageToDP(0.15),
    borderRadius: widthPercentageToDP(1),
    borderColor: theme.colors.white,
    borderWidth: 0.5,
    marginHorizontal: 4,
  },
});
