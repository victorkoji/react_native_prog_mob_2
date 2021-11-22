import React, { useContext, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import UserService from '../../database/services/userService';
import { validatePassword, onSignIn } from '../../database/services/auth';

import { Style } from './Style';
import AuthContext from '../../contexts/AuthContext';

export default function Login({navigation}) {

  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const { logged, setLogged } = useContext(AuthContext);

  async function onLogin(event) {
    if (email.length === 0 || password.length === 0) {
      Alert.alert('Preencha usuário e senha para continuar!');
    } else {
      try {
        const user = await UserService.findByEmail(email);

        if(validatePassword(password, user.password)){
          onSignIn();
          setLogged(true)
        }else{
          Alert.alert('Usuário ou senha inválida!');
        }
        
      } catch (_err) {
        Alert.alert('Houve um problema com o login, verifique suas credenciais!');
      }
    }
  }

  return (
    <View style={Style.container}>
      <Text style={Style.logo}>Edane</Text>
    
      <View style={Style.inputView} >
        <TextInput
          style={Style.inputText}
          placeholder='email@gmail.com'
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={Style.inputView} >
        <TextInput
          style={Style.inputText}
          placeholder="password"
          hint="1-6 chars including numeric chars"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={Style.loginBtn} onPress={() => onLogin()} >
        <Text style={Style.loginText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}