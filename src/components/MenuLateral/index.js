import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../../screens/Home";
import Questionnaire from "../../screens/Questionnaire";
import AnwserQuestionnaires from "../../screens/AnwserQuestionnairies";
import Register from "../../screens/Register";
import Profile from "../../screens/Profile";
import Users from "../../screens/Users";
import AddUser from "../../screens/Users/add";

import ContentMenuLateral from "../ContentMenuLateral";

export default function MenuLateral() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <ContentMenuLateral {...props} />}>
      <Drawer.Screen name="Profile" component={Profile} options={{ title: 'Perfil' }} />
      <Drawer.Screen name="Home" component={Home} options={{ title: 'Tela Inicial' }} />
      <Drawer.Screen name="Users" component={Users} options={{ title: 'Usuários' }} />
      <Drawer.Screen name="Questionnaire" component={Questionnaire} options={{ title: 'Questionário' }} />
      <Drawer.Screen name="Registro" component={Register} />
      <Drawer.Screen name="AnwserQuestionnaires" component={AnwserQuestionnaires} options={{ title: 'Questionários Respondidos' }}/>
      <Drawer.Screen name="AddUser" component={AddUser} options={{ title: 'Adicionar Usuário' }}/>
    </Drawer.Navigator>
  );
}