import React from 'react';
import { Text, View, Button } from 'react-native';

import { Style } from './Style';

export default function Home({navigation}) {
  return (
    <View style={Style.container}>
      <Text>Register Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}>
      </Button>
    </View>
  );
}