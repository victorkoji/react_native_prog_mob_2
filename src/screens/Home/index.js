import React from 'react';

import { View } from 'react-native';
import { Button } from 'react-native-ui-lib';
import { Title } from 'react-native-paper';

import { Style } from './Style';

export default function Home({ navigation }) {
  return (
    <View style={Style.container}>

      <Title>Bem-vindo ao EDANE</Title>

    </View>
  );
}