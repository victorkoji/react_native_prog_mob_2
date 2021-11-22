import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../../screens/Home";
import Questionnaire from "../../screens/Questionnaire";
import AnwserQuestionnaires from "../../screens/AnwserQuestionnairies";
import Register from "../../screens/Register";

import ContentMenuLateral from "../ContentMenuLateral";

export default function MenuLateral() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <ContentMenuLateral {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Questionnaire" component={Questionnaire} />
      <Drawer.Screen name="Registro" component={Register} />
      <Drawer.Screen name="AnwserQuestionnaires" component={AnwserQuestionnaires} />
    </Drawer.Navigator>
  );
}