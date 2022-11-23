import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import {theme} from '../Utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Home,
  Comman,
  Portals,
  News,
  HealthInsurance,
  Login,
  Loginform,
  Signup,
  Registration,
  Setting,
  SecondRegForm,
} from '../Screens';

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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Comman" component={Comman} />
      <Stack.Screen name="Portals" component={Portals} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="Helth" component={HealthInsurance} />
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
        component={Setting}
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
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />

        <Stack.Screen name="Tabs" component={BottomTab} />
        <Stack.Screen name="LoginForm" component={Loginform} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="SecondRegForm" component={SecondRegForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
