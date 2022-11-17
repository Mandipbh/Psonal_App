import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Fontisto';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../Utils';
const CustomCard = props => {
  const {item, onPress, index} = props;
  return (
    <TouchableOpacity
      style={styles.flatListView}
      index={index}
      onPress={onPress}>
      <View style={{justifyContent: 'center', left: wp(3)}}>
        <Text style={styles.textlist}>{item?.name}</Text>
      </View>
      <LinearGradient
        style={styles.linearView}
        end={{x: 1, y: 1}}
        colors={[theme.colors.blue, theme.colors.lightRed]}>
        <Icon name="angle-right" color={theme.colors.white} size={wp(3)} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  flatListView: {
    backgroundColor: '#f5f6f7',
    borderRadius: wp(6),
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  linearView: {
    padding: wp(6.5),
    borderRadius: 10,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: 'center',
  },
  textlist: {
    color: '#002160',
    fontSize: wp(4.5),
    fontWeight: '700',
  },
});
