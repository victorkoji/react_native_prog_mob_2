import React from 'react';
import { Text, View, Button } from 'react-native';

import { Style } from './Style';

export default function Home({navigation}) {
  return (
    <View style={Style.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}>
      </Button>
    </View>
  );
}