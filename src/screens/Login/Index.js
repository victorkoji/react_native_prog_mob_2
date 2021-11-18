import React, { useState } from 'react';
import { Button, Incubator } from 'react-native-ui-lib';
import { Text, Alert, View } from 'react-native';
import { Style } from './Style';
const {TextField} = Incubator;

export default function Login({navigation}) {

  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  function onLogin(event) {
    console.log(email)
    console.log(password)
    Alert.alert('Logado com Sucesso!');

    navigation.navigate('SignedIn')
  }

  return (
    <View style={Style.container}>
      <Text>Login</Text>
      <TextField
        placeholder='email@gmail.com'
        leftIcon={{ name: 'email' }}
        onChangeText={text => setEmail(text)}
      />

      <TextField
        placeholder='password'
        leftIcon={{ name: 'lock' }}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />

      <Button
        label="Entrar"
        onPress={() => onLogin()}
      />
    </View>
  );
}