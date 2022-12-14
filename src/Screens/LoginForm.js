import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../Utils';
import {Header} from '../Components';
import {InputBox} from '../Components';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

const LoginForm = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        headerName={'Login'}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        hideMenu
      />

      <View>
        <InputBox label="Email" placeholder="JohnDoe@example.com" />
      </View>
      <View>
        <InputBox
          label="Wachtwoord"
          placeholder="*********"
          secureTextEntry={true}
        />
      </View>

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
              {'Login '}
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

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bttomView: {
    // position: 'absolute',
    bottom: 0,
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
    top: hp(35),
  },
});
