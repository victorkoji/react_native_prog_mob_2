import React, { useEffect, useState } from "react";

import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
  Button
} from "react-native";

import { getUserLogged } from '../../database/services/auth';

import { Style } from "./Style";

export default function Profile({ navigation }) {
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {

    async function getUser() {
      let user = await getUserLogged();

      setData({
        'email': user.email,
        'password': user.password
      })
    }

    getUser()
  }, [])

  return (
    <View style={Style.container}>

      <Text style={Style.photo}></Text>

      <View style={Style.inputView} >
        <TextInput
          style={Style.inputText}
          placeholder='email@gmail.com'
          value={data.email}
          editable = {false}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={Style.inputView} >
        <TextInput
          style={Style.inputText}
          placeholder="password"
          hint="1-6 chars including numeric chars"
          onChangeText={text => setPassword(text)}
          value={data.password}
          editable = {false}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={Style.loginBtn} onPress={() => onLogin()} >
        <Text style={Style.loginText}>Salvar</Text>
      </TouchableOpacity>

    </View>
  );
}
