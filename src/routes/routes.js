import * as React from 'react';

import Login from "../screens/Login";
import MenuLateral from "../components/MenuLateral";
import { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthContext from '../contexts/AuthContext';

const NavigationStack = createNativeStackNavigator();

export default function NavigationStackHome(signedIn = false){
  const { logged, setLogged } = useContext(AuthContext);

  return (
    <NavigationStack.Navigator screenOptions={{headerShown: false}}>
      {(logged === false)
          // If not logged in, the user will be shown this route
          ? <NavigationStack.Screen name="SignedOut" component={Login} />
          // When logged in, the user will be shown this route
          : <NavigationStack.Screen name="SignedIn" component={MenuLateral} />
      }
    </NavigationStack.Navigator>
  )
};