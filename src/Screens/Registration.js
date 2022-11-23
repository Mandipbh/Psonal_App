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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../Utils';
import {Header} from '../Components';
import {SecondTextInput} from '../Components';
import {TextInput} from 'react-native-gesture-handler';

export const CommenInput = props => {
  const {placeholder, secureTextEntry, style} = props;
  return (
    <TextInput
      placeholderTextColor={theme.colors.blue1}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      style={[
        {
          fontSize: 18,
          paddingVertical: hp(1),
          paddingHorizontal: wp(5),
          borderWidth: 1,
          marginVertical: wp(2),
          borderColor: theme.colors.primary,
          borderRadius: 10,
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
    <>
      <Header
        headerName={'Registratie'}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        hideMenu
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <SecondTextInput label="Contact informatie">
              <CommenInput
                placeholder="Email"
                style={
                  {
                    // borderWidth: 1,
                    // borderColor: theme.colors.primary,
                    // borderRadius: 10,
                  }
                }
              />
              <CommenInput placeholder="Wachtwoord" secureTextEntry={true} />
              {/* <View style={styles.divider} /> */}
              <CommenInput
                placeholder="Voornaam"
                secureTextEntry={true}
                // style={{marginTop: hp(1)}}
              />
              <CommenInput placeholder="Achternaam" />
              {/* <View style={styles.divider} /> */}
              <CommenInput
                placeholder="Stad"
                secureTextEntry={true}
                // style={{marginTop: hp(1)}}
              />
              <CommenInput placeholder="Straatnaam" />
              <CommenInput placeholder="Postcode" />
              {/* <View style={styles.divider} /> */}
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
                  {'Doorgaan '}
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
          {/* <View style={styles.bttomView}>
            <Image
              style={styles.bottomImgone}
              source={require('../assets/Bottom2.png')}
            />
            <Image
              style={styles.bottomImgtwo}
              source={require('../assets/Bottom1.png')}
            />
          </View> */}

          <Image
            source={require('../assets/CompLayer1.png')}
            style={{marginTop: wp(-25)}}
          />
        </View>
      </KeyboardAwareScrollView>
    </>
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
    bottom: hp('20%'),
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
    top: hp('10%'),
  },
  divider: {borderWidth: 0.4, borderColor: 'lightgray'},
});
