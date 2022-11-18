import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const theme = {
  fonts: {},
  colors: {
    primary: '#f69768',
    primary1: '#f5f6f7',
    transparent: 'transparent',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#7e7e7e',
    gray1: '#eeeeed',
    gray2: '#f6f6f5',
    lightRed: '#bd808b',
    blue: '#5d92f8',
    blue1: '#002160',
    green: '#47d649',
    lightGreen: '#37cac8',
  },
  SCREENWIDTH: width,
  SCREENHEIGHT: height,
};

export default theme;
