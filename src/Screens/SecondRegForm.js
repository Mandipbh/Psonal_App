import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {theme} from '../Utils';
import {Header} from '../Components';
import InputBox, {SecondTextInput} from '../Components/InputBox';
import {CommenInput} from './Registration';

const Prefrences = [
  {id: 0, name: 'Health insurance'},
  {id: 1, name: 'School'},
  {id: 2, name: 'Occupation'},
];

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

const SecondRegForm = ({navigation}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const renderItem = ({item, index}) => {
    return (
      <>
        <TouchableOpacity
          style={{
            marginVertical: hp(0.5),
            justifyContent: 'center',
            backgroundColor:
              selectedItem === index
                ? theme.colors.primary1
                : theme.colors.white,
          }}
          onPress={() => {
            setSelectedItem(index);
          }}>
          <Text
            style={{
              fontSize: 18,
              color: theme.colors.blue1,
              paddingHorizontal: wp(8),
              top: wp(2),
            }}>
            {item.name}
          </Text>
          <View style={styles.divider} />
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        headerName={'Registratie'}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        hideMenu
      />

      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <SecondTextInput label="Voorkeuren">
          <CommenInput placeholder="Zorgverzekeraar" />
          <CommenInput placeholder="School" />
          <CommenInput placeholder="Beroep" />
        </SecondTextInput>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
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
                {'Registreren '}
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
        <Image
          source={require('../assets/CompLayer1.png')}
          style={{marginTop: wp(-25)}}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SecondRegForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
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
    top: hp('12%'),
  },
  divider: {borderWidth: 0.4, borderColor: 'lightgray', marginTop: hp(4)},
});
