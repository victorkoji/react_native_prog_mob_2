import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Avatar, Colors } from "react-native-ui-lib";
import { Caption, Drawer, Title } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { onSignOut, getUserLogged } from "../../database/services/auth";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Style } from "./Style";

import AuthContext from "../../contexts/AuthContext";

export default function ContentMenuLateral(props) {
  const { logged, setLogged } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");

  useEffect(() => {
    async function getUser() {
      let user = await getUserLogged();
      setName(user.name);
      setEmail(user.email);
      setTipoUsuario(user.tipo_usuario);
    }

    getUser();
  }, []);

  const signOut = () => {
    onSignOut();
    setLogged(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={Style.drawerContent}>
          <View style={Style.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar
                containerStyle={{ marginVertical: 5 }}
                title="Empty Gravatar"
                backgroundColor={Colors.red60}
                source={{
                  uri: "https://www.gravatar.com/avatar/2497473d558a37020c558bf26e380a7c?d=blank",
                }}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={Style.title}>{name}</Title>
                <Caption style={Style.caption}>{email}</Caption>
              </View>
            </View>
          </View>

          {
            tipoUsuario == "admin" 
            ? <NavigateAdmin {...props} />
            : <NavigateAluno {...props} />
          }

        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={Style.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sair"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const NavigateAdmin = (props) => {
  return (
    <Drawer.Section style={Style.drawerSection}>
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name="account-outline" color={color} size={size} />
        )}
        label="Perfil"
        onPress={() => {
          props.navigation.navigate("Profile");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        )}
        label="Tela Inicial"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name="account-group" color={color} size={size} />
        )}
        label="Usuários"
        onPress={() => {
          props.navigation.navigate("Users");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name="book-open-variant" color={color} size={size} />
        )}
        label="Questionários"
        onPress={() => {
          props.navigation.navigate("AnwserQuestionnaires");
        }}
      />
    </Drawer.Section>
  );
};

const NavigateAluno = (props) => {
  return (
    <Drawer.Section style={Style.drawerSection}>
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name="account-outline" color={color} size={size} />
        )}
        label="Perfil"
        onPress={() => {
          props.navigation.navigate("Profile");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        )}
        label="Tela Inicial"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Icon name="lead-pencil" color={color} size={size} />
        )}
        label="Questionário"
        onPress={() => {
          props.navigation.navigate("Questionnaire");
        }}
      />
    </Drawer.Section>
  );
};
