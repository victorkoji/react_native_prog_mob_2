import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { Text, Alert, View } from 'react-native';
import { Style } from './Style';

export default function Home({navigation}) {

  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  function onLogin(event) {
    console.log(email)
    console.log(password)
    Alert.alert('Logado com Sucesso!');

    navigation.navigate('Register')
  }

  return (
    <View style={Style.container}>
      <Text>Login</Text>
      <Input
        placeholder='email@gmail.com'
        leftIcon={{ name: 'email' }}
        onChangeText={text => setEmail(text)}
      />

      <Input
        placeholder='password'
        leftIcon={{ name: 'lock' }}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />

      <Button
        title="Entrar"
        onPress={() => onLogin()}
      />
    </View>
  );
}