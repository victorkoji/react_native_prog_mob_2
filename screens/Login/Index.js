import React from 'react';
import { Text, View, Button } from 'react-native';

import { Style } from './Style';

export default function Home({navigation}) {
  return (
    <View style={Style.container}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}>
        Go to Register
      </Button>
    </View>
  );
}