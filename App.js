import React from 'react';
import Faleconosco from './views/Faleconosco'
import Home from './views/Home'
import Login from './views/Login'
import Shop from './views/Shop'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function App(){
  

  const Stack = createStackNavigator();

  return (
    
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Faleconosco" component={Faleconosco} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}



