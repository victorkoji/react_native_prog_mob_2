import React from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-ui-lib';
import { Style } from './Style';

export default function Home({navigation}) {
    return (
        <View style={Style.container}>
            <CheckBox
                center
                title='Click Here'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={1}
            />
        </View>
    );
}