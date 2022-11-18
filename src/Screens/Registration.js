import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../Utils';
import Header from '../Components/Header';
import InputBox, {SecondTextInput} from '../Components/InputBox';
import {TextInput} from 'react-native-gesture-handler';

const CommenInput = props => {
  const {placeholder, secureTextEntry, style} = props;
  return (
    <TextInput
      placeholderTextColor={theme.colors.blue1}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      style={[
        {
          fontSize: 18,
          paddingVertical: 6,
          paddingHorizontal: wp(5),
        },
        style,
      ]}
    />
  );
};

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

const Registration = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        headerName={'Registration'}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        hideMenu
      />

      <View>
        <SecondTextInput label="Contact information">
          <CommenInput placeholder="Email" style={{marginTop: hp(1)}} />
          <CommenInput placeholder="Password" secureTextEntry={true} />
          <View style={styles.divider} />
          <CommenInput
            placeholder="First name"
            secureTextEntry={true}
            style={{marginTop: hp(1)}}
          />
          <CommenInput placeholder="Last name" secureTextEntry={true} />
          <View style={styles.divider} />
          <CommenInput
            placeholder="City"
            secureTextEntry={true}
            style={{marginTop: hp(1)}}
          />
          <CommenInput placeholder="StreetName" secureTextEntry={true} />
          <CommenInput placeholder="Zipcode" secureTextEntry={true} />
          <View style={styles.divider} />
        </SecondTextInput>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('SecondRegForm')}
        style={styles.linearGradientView}>
        <LinearGradient
          style={{
            borderRadius: wp('10%'),
            padding: wp(1),
            paddingVertical: wp(2.5),
            alignItems: 'center',
          }}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={[theme.colors.blue, theme.colors.lightRed]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: wp(4.5),
                color: theme.colors.white,
                textAlign: 'center',
              }}>
              {'Continue '}
            </Text>
            <Icon
              name="arrowright"
              color={theme.colors.white}
              size={wp(4)}
              style={{top: 1}}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.bttomView}>
        <Image
          style={styles.bottomImgone}
          source={require('../assets/Bottom2.png')}
        />
        <Image
          style={styles.bottomImgtwo}
          source={require('../assets/Bottom1.png')}
        />
      </View>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  bttomView: {
    // position: 'absolute',
    bottom: hp('25%'),
  },
  bottomImgone: {
    top: -h * -0.28,
    transform: [{rotate: '1deg'}],
    // position: 'absolute',
    // height: -h * -0.4,
    resizeMode: 'contain',
    // top: hp(20),
  },
  bottomImgtwo: {
    // height: h * 0.8,
    resizeMode: 'contain',
    top: h * -0.08,
    transform: [{rotate: '0deg'}],
    // alignSelf: 'flex-end',
    width: w,
    // top: hp(10),
  },
  linearGradientView: {
    // bottom: hp(10),
    width: w * 0.7,
    // position: 'absolute',
    alignSelf: 'center',
    zIndex: 111,
    top: hp('15%'),
  },
  divider: {borderWidth: 0.4, borderColor: 'lightgray'},
});
