import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { View, RadioGroup, RadioButton } from "react-native-ui-lib";
import { Style } from "./Style";


export default class Alternatives extends React.Component{
    keyAlternativeExtractor = (item) => item.title;

    state = {
        enableScrollViewScroll: true,
    }
    onEnableScroll= (value) => {
        this.setState({
            enableScrollViewScroll: value,
        });
    };

    renderAlternatives(alternative){
        var idQuestion = this.props.questionRef
        return (
            <View row centerV marginB-5>
                <RadioGroup onValueChange={(value) => this.props.onChangeQuestion({key:idQuestion, value})}>
                    <RadioButton checked={alternative.title === this.props.saveAlternative} style={Style.radionButtonSize} size={20} value={alternative.title} label={alternative.title}/>
                </RadioGroup>
            </View>
        );
    }

    render(){
        var alternatives = this.props.alternatives
        return (
            <FlatList onTouchStart={() => {
                    this.onEnableScroll( false );
                }} 
                data={alternatives}
                renderItem={({ item }) => this.renderAlternatives(item)}
                keyExtractor={this.keyAlternativeExtractor}
            />
        )
    }
}