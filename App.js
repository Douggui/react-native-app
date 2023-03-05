import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button } from 'react-native';
import { ScreenStack, ScreenStackHeaderRightView } from 'react-native-screens';
import React from 'react'
import About from './components/About/About';
import HomePage from './components/Home/Home';
import Logo from './components/Logo/Logo';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from '@rneui/themed/dist/config';
// import StackNavigator from './components/Home/StackNavigator';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const Root=()=>{
//   <Stack.Navigator>
//     <Stack.Screen name="Home" component={HomePage}/>
//     <Stack.Screen name="Result" component={Result} title="Resultats de recherche"/>
//   </Stack.Navigator>
// }

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'About') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#f194ff',
            tabBarInactiveTintColor: 'white',
            tabBarBackground:()=>{
              
            }
        })}
        
        
        >
        <Tab.Screen
         name="Home"
         component={HomePage}
          options={{ 
            headerShown: false ,
             title:'Accueil' 
            }}

         />
        <Tab.Screen 
          name="About"  
          component={About}
          options={{
            title:'A propos'
          }}
          />
        {/* <Tab.Screen name="Root" component={Root} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    // color: "#fff"
  },
  text:{
    color:'#fff',
    fontSize : 26,
    textAlign: "left"
  }
});
