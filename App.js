import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home/Index';
import Login from './src/screens/Login/Index';
import Register from './src/screens/Register/Index';

import AlunoService from './src/database/services/alunoService';
import DatabaseInit from './src/database/default';

const Stack = createNativeStackNavigator();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    new DatabaseInit
    AlunoService.findAll().then((response) => {
      console.log(response)
    })
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
