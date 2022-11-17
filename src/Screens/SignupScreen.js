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

const SignupScreen = ({navigation}) => {
  return (
    <View>
      <View style={styles.headderView}>
        <Icon
          name="arrowleft"
          color={theme.colors.white}
          size={wp(5)}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={{color: theme.colors.white, fontSize: wp(4.5)}}>
          {' '}
          Login
        </Text>
      </View>
      <Text
        style={{
          textAlign: 'center',
          marginHorizontal: wp(7),
          fontSize: wp(5.5),
          color: 'black',
          marginTop: hp(18),
        }}>
        Log in securely here with your Digit so that you have access to all your
        portals and business
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Tabs')}
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
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: wp(4.5),
                color: theme.colors.white,
                textAlign: 'center',
              }}>
              {'Login in with your Digi '}
            </Text>
            <Icon
              name="arrowright"
              color={theme.colors.white}
              size={wp(5)}
              style={{top: 4}}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <Image
        style={styles.bottomImgone}
        source={require('../assets/Bottom2.png')}
      />
      <Image
        style={styles.bottomImgtwo}
        source={require('../assets/Bottom1.png')}
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  headderView: {
    backgroundColor: theme.colors.primary,
    padding: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomImgone: {
    top: -h * -0.67,
    transform: [{rotate: '-1deg'}],
    position: 'absolute',
    height: -h * -0.4,
    resizeMode: 'contain',
  },
  bottomImgtwo: {
    height: h * 0.5,
    resizeMode: 'contain',
    marginTop: h * 0.29,
    transform: [{rotate: '0deg'}],
    width: w,
  },
  linearGradientView: {
    top: h * 0.75,
    width: w * 0.7,
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 111,
  },
});
