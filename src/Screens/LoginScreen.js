import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../Utils';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Image style={styles.topimgTwo} source={require('../assets/Top2.png')} />
      <Image style={styles.topImgOne} source={require('../assets/Top1.png')} />
      <Image
        style={styles.psonalText}
        source={require('../assets/Psonaltxt.png')}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
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
              {'Login '}
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

export default LoginScreen;

const styles = StyleSheet.create({
  topImgOne: {
    transform: [{rotate: '0deg'}],
    height: h * 0.7,
    top: -h * 0.28,
    resizeMode: 'contain',
    width: w * 1.09,
  },
  topimgTwo: {
    transform: [{rotate: '0deg'}],
    position: 'absolute',
    top: -h * 0.15,
    width: w,
    height: h * 0.5,
    resizeMode: 'contain',
  },
  psonalText: {
    height: h * 0.15,
    alignSelf: 'center',
    top: h * -0.36,
    resizeMode: 'contain',
  },
  bottomImgone: {
    top: -h * -0.67,
    transform: [{rotate: '-1deg'}],
    position: 'absolute',
    height: -h * -0.4,
    resizeMode: 'contain',
  },
  bottomImgtwo: {
    height: h * 0.8,
    resizeMode: 'contain',
    top: h * -0.35,
    transform: [{rotate: '0deg'}],
    alignSelf: 'flex-end',
    width: w * 1.1,
  },
  linearGradientView: {
    top: h * 0.73,
    width: w * 0.7,
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 111,
  },
});
