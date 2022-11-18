import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import HomeScreen from '../Screens/HomeScreen';
import PortalsScreen from '../Screens/PortalsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import SettingScreen from '../Screens/SettingScreen';
import {theme} from '../Utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NewsScreen from '../Screens/NewsScreen';
import MessagesScreen from '../Screens/MessagesScreen';
import CourseScreen from '../Screens/CourseScreen';
import CommanScreen from '../Screens/CommanScreen';
import HealthInsuranceScreen from '../Screens/HealthInsuranceScreen';
import LoginForm from '../Screens/LoginForm';
import Registration from '../Screens/Registration';
import SecondRegForm from '../Screens/SecondRegForm';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Map = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Map Screen </Text>
    </View>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Comman" component={CommanScreen} />
      <Stack.Screen name="Portals" component={PortalsScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="Helth" component={HealthInsuranceScreen} />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: theme.colors.white,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesome
                name="home"
                size={wp(6.5)}
                color={!focused ? theme.colors.gray : theme.colors.primary}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="map"
        component={Map}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <FontAwesome
                name="map-marker"
                size={wp(6.5)}
                color={!focused ? theme.colors.gray : theme.colors.primary}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <AntDesign
                name="setting"
                size={wp(6.5)}
                color={!focused ? theme.colors.gray : theme.colors.primary}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Messgaes"
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        <Stack.Screen name="Signup" component={SignupScreen} />

        {/* <Stack.Screen name="Tabs" component={BottomTab} /> */}
        {/* <Stack.Screen name="LoginForm" component={LoginForm} /> */}
        {/* <Stack.Screen name="Portals" component={PortalsScreen} /> */}
        {/* <Stack.Screen name="News" component={NewsScreen} /> */}
        {/* <Stack.Screen name="Messgaes" component={MessagesScreen} />
        <Stack.Screen name="Course" component={CourseScreen} /> */}
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="SecondRegForm" component={SecondRegForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
