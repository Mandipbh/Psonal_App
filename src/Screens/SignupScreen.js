import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../Utils';
import Header from '../Components/Header';

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        headerName={'Login'}
        hideMenu
        onLeftIconPress={() => {
          navigation.goBack();
        }}
      />
      <Text style={styles.txt}>
        Log in securely here with your Digit so that you have access to all your
        portals and business
      </Text>
      <View style={{marginTop: hp(10)}}>
        <TouchableOpacity onPress={() => {}} style={styles.linearGradientView}>
          <LinearGradient
            style={styles.btn}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            colors={[theme.colors.blue, theme.colors.lightRed]}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.btnTxt}>{'Login in with your Digit '}</Text>
              <Icon
                name="arrowright"
                color={theme.colors.white}
                size={wp(5)}
                style={{top: 4}}
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.or}>Or</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginForm')}
          style={styles.linearGradientView1}>
          <LinearGradient
            style={styles.btn}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            colors={[theme.colors.blue, theme.colors.lightRed]}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.btnTxt}>{'Login in with your Psonal '}</Text>
              <Icon
                name="arrowright"
                color={theme.colors.white}
                size={wp(5)}
                style={{top: 4}}
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Registration')}
          style={styles.register}>
          <LinearGradient
            style={styles.btn}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            colors={[theme.colors.blue, theme.colors.lightRed]}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.btnTxt}>{'Register'}</Text>
              <Icon
                name="arrowright"
                color={theme.colors.white}
                size={wp(5)}
                style={{top: 4}}
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.new}>{'No Psonal account yet? Register here'}</Text>
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

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headderView: {
    backgroundColor: theme.colors.primary,
    padding: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'flex-end',
  },
  bottomImgone: {
    top: h * 0.1,
    transform: [{rotate: '-1deg'}],
    position: 'absolute',
    height: -h * -0.4,
    resizeMode: 'contain',
    bottom: 0,
    right: -wp(3),
  },
  bottomImgtwo: {
    // height: h * 0.5,
    resizeMode: 'contain',
    // marginTop: h * 0.1,
    transform: [{rotate: '0deg'}],
    width: w,
    top: h * 0.1,
  },
  linearGradientView: {
    // top: h * 0.75,
    width: w * 0.7,
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 111,
  },
  linearGradientView1: {
    // top: h * 0.75,
    width: w * 0.7,
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 111,
    marginTop: hp(13.5),
  },
  txt: {
    textAlign: 'center',
    marginHorizontal: wp(7),
    fontSize: wp(5),
    color: theme.colors.blue1,
    marginTop: hp(18),
  },
  or: {
    textAlign: 'center',
    marginHorizontal: wp(7),
    fontSize: wp(4.8),
    color: theme.colors.blue1,
    marginVertical: hp(7.5),
  },
  btn: {
    borderRadius: wp('10%'),
    padding: wp(1),
    paddingVertical: wp(2.5),
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: wp(4.5),
    color: theme.colors.white,
    textAlign: 'center',
  },
  register: {
    // top: h * 0.75,
    width: w * 0.7,
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 111,
    bottom: hp(7.5),
  },
  new: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 111,
    bottom: hp(4),
    fontSize: wp(4),
    color: theme.colors.blue1,
    fontWeight: '500',
  },
});
