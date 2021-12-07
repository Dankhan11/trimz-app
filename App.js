import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react';
import{BrowserRouter as Router , Switch, Route, Link} from "react-router-dom";
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import ClientScreen from './app/screens/ClientScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import ButtonCont from './app/components/button';
//import Customer from './app/screens/CustomerScreen';

//const history = createBrowserHistory({ forceRefresh :true});
 
//These components allow us to represent our code in an abstract way 

const Stack = createNativeStackNavigator();

export default function App() {

  
  return ( 
    <NavigationContainer>
      
     <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Welcome' }}/>
        <Stack.Screen 
        name="Login"
         component={LoginScreen} />
         <Stack.Screen
         name = "SignUp"
         component ={SignUpScreen} />

        <Stack.Screen
        name = "Client"
        component = {ClientScreen}/>

        
        
      </Stack.Navigator>
      

    </NavigationContainer>



   )
  
}

