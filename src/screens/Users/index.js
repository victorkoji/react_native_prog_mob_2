import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import {
  View,
  ListItem,
  Text,
  paper
} from "react-native-ui-lib";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import userService from "../../database/services/userService";

import { Style } from "./Style";

export const Lista = (props) => {
  const { users } = props.users;
  const navigation = useNavigation();

  const renderItem = ({ item, index }) => (
    <View>
      <ListItem style={Style.listItem}>
        <ListItem.Part middle column containerStyle={Style.border}>
          <ListItem.Part containerStyle={{ marginBottom: 3 }}>
            <Text
              grey10
              text70
              style={{ flex: 1, marginRight: 10 }}
              numberOfLines={1}
            >
              {item.email}
            </Text>
            <Text grey10 text100 style={{ marginTop: 2 }}>
              {`ID: #${item.id}`}
            </Text>
          </ListItem.Part>
          <ListItem.Part>
            <Text
              style={{ flex: 1, marginRight: 10 }}
              text90
              grey40
              numberOfLines={1}
            >{`Tipo Usuário: ${item.tipo_usuario}`}</Text>
          </ListItem.Part>
        </ListItem.Part>
      </ListItem>
    </View>
  );

  return (
    <View style={Style.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={Style.buttonAdd} onPress={() => navigation.navigate('AddUser')} >
        <Icon name="account-plus" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export const ListaVazia = () => {
  return (
    <View
      style={[
        Style.container,
        { alignItems: "center", justifyContent: "center" },
      ]}
    >
      <Text>{"Nenhum questionário respondido até o momento!"}</Text>
    </View>
  );
};

export default function Users() {
  const [showMenu, setShowMenu] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.findAll().then((users) => {
      setUsers({ users: users["_array"] });
    });
  }, [users]);

  return (
    <View style={Style.container}>
      {users ? <Lista users={users} /> : <ListaVazia />}
    </View>
  );
}
