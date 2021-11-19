import React from 'react';

import { View } from 'react-native';
import { Button, Checkbox, Assets, Text, Colors, Spacings } from 'react-native-ui-lib';

import { Style } from './Style';

export default function Home({ navigation }) {
  return (
    <View style={Style.container}>
      <Button
        label="Sair"
        onPress={() => navigation.navigate('SignedOut')}
      />
    </View>
  );
}