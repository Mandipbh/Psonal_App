import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../Utils';

const InputBox = props => {
  const {label, placeholder} = props;
  return (
    <View style={styles.inputView}>
      <LinearGradient
        style={styles.linearView}
        end={{x: 1, y: 1}}
        colors={[theme.colors.blue, theme.colors.lightRed]}>
        <View style={{justifyContent: 'center', left: wp(3)}}>
          <Text style={styles.textlist}>{'Email'}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  inputView: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: wp(5),
  },
  linearView: {
    padding: wp(4.5),
    borderRadius: 10,
    width: '100%',
    // borderTopLeftRadius: 40,
    // borderBottomLeftRadius: 40,
    justifyContent: 'center',
  },
});
