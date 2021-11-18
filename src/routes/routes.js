// src/routes.js

import { createStackNavigator } from 'react-navigation-stack';

import Login from "../screens/Login";
import MenuLateral from "../components/MenuLateral";

export const NavigationStackHome = (signedIn = false) => {

  return createStackNavigator(
    {
      SignedIn: { screen: MenuLateral },
      SignedOut: { screen: Login },
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut",
      navigationOptions: {
        gesturesEnabled: false,
      },
    }
  );
};