import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Fontisto';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../Utils';
const MessageCard = props => {
  const {item, onPress, index} = props;
  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.flatListView}
        index={index}
        onPress={onPress}>
        <LinearGradient
          style={styles.linearView}
          end={{x: 1, y: 1}}
          colors={[theme.colors.blue, theme.colors.lightRed]}>
          <View style={{justifyContent: 'center', left: wp(3)}}>
            <Text style={styles.textlist}>{item?.title}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.desc}>{item.desc}</Text>
    </View>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  flatListView: {
    backgroundColor: '#f5f6f7',
    borderRadius: wp(6),
    flexDirection: 'row',
    // margin: 10,
    justifyContent: 'space-between',
  },
  linearView: {
    padding: wp(4.5),
    borderRadius: 10,
    width: '100%',
    // borderTopLeftRadius: 40,
    // borderBottomLeftRadius: 40,
    justifyContent: 'center',
  },
  textlist: {
    color: theme.colors.white,
    fontSize: wp(4.5),
    fontWeight: '700',
  },
  desc: {
    margin: wp(3),
    color: theme.colors.gray,
  },
  card: {
    backgroundColor: theme.colors.gray1,
    margin: wp(2),
  },
});
