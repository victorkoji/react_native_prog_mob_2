
import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import Questionnaire from '../screens/Questionnaire';
import Register from '../screens/Register';
import Login from '../screens/Login';

export default function MenuLateral({ navigation }) {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Tela Inicial" component={Home} />
        <Drawer.Screen name="Questionário" component={Questionnaire} />
        <Drawer.Screen name="Registro" component={Register} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
