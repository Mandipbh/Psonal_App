import {StyleSheet, Text, TextInput, View} from 'react-native';
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
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.textlist}>{label}</Text>
        </View>
      </LinearGradient>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.black}
      />
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
  textlist: {
    fontSize: wp(5),
    color: theme.colors.white,
  },
  input: {
    backgroundColor: theme.colors.gray1,
    fontSize: wp(5.2),
    paddingVertical: hp(2.3),
    paddingHorizontal: wp(3),
  },
});