 import { View, Text } from 'react-native'
 import React from 'react'
 import { NavigationContainer } from '@react-navigation/native'
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../ecrans/Home';
import BottomTabs from '../ecrans/tabs';
import ChatDetails from '../ecrans/chatDetails';

 
 const Stack = createNativeStackNavigator();
 const Routes = () => {
   return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>     
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="ChatDetails" component={ChatDetails} options={{headerShown: true}} />
      </Stack.Navigator>
     </NavigationContainer>
   )
 }
 
 export default Routes;