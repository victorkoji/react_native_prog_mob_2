import React, { Component } from 'react';
import { View } from 'react-native';
import {Text, CheckBox, RadioButton, Colors, Button, RadioGroup} from 'react-native-ui-lib';
import { Style } from './Style';

const COLORS = {
    DEFAULT: {name: 'Black', color: Colors.black},
};

export default class Questionnaire extends Component {
    static colors = COLORS;
    constructor(props) {
        super(props);
        this.state = {
            color: undefined,
            messageType: undefined,
            disabledSelectedValue: true
        };

        this.state2 = {
            color: undefined,
            messageType: undefined,
            disabledSelectedValue: true
        };

        this.state3 = {
            color: undefined,
            messageType: undefined,
            disabledSelectedValue: true
        };
    }

    renderRadioButtonForColorEnum(color) {
        return (
            
            <View style={Style.questionnaire} row centerV marginB-5>
                <Text style={Style.commentQuestions}>
                Certifique-se de responder adequadamente as perguntas a seguir
                </Text>
                <View style={Style.segmentQuestion}>
                    <Text style={Style.text_question}>
                    Exemplo Teste 1?
                    </Text>
                    <RadioGroup initialValue={this.state.color || null} onValueChange={value => this.setState({color: value})}>
                        <RadioButton style={Style.radionButtonSize} size={20} value="1" label="Não"/>
                        <RadioButton style={Style.radionButtonSize} size={20} value="2" label="Não 2"/>
                        <RadioButton style={Style.radionButtonSize} size={20} value="3" label="Sim"/>
                        <RadioButton style={Style.radionButtonSize} size={20} value="4" label="Sim 2"/>
                    </RadioGroup>
                </View>

                <View style={Style.segmentQuestion}>
                    <Text style={Style.text_question}>
                    Exemplo Teste 2?
                    </Text>
                    <RadioGroup initialValue={this.state2.color || null} onValueChange={value => this.setState({color: value})}>
                        <RadioButton style={Style.radionButtonSize} size={20} value="5" label="Não"/>
                        <RadioButton style={Style.radionButtonSize} size={20} value="6" label="Não 2"/>
                        <RadioButton style={Style.radionButtonSize} size={20} value="7" label="Sim"/>
                        <RadioButton style={Style.radionButtonSize} size={20} value="8" label="Sim 2"/>
                    </RadioGroup>
                </View>
                <View style={Style.segmentQuestion}>
                    <Text style={Style.text_question}>
                    Exemplo Teste 3?
                    </Text>
                    <RadioGroup initialValue={this.state3.color || null} onValueChange={value => this.setState({color: value})}>
                        <RadioButton style={Style.radionButtonSize} size={20} value="9" label="Não"/>
                        <RadioButton style={Style.radionButtonSize} size={20} value="10" label="Não 2"/>
                        <RadioButton style={Style.radionButtonSize} size={20} value="11" label="Sim"/>
                        <RadioButton style={Style.radionButtonSize} size={20} value="12" label="Sim 2"/>
                    </RadioGroup>
                </View>

                <View style={Style.btnActionQuestionnaire}>
                    {/* <Button
                        label={'Cancelar'}
                        enableShadow
                        style={Style.btnConfirmQuestionnaire}
                    /> */}
                    <Button
                        label="Cancelar"
                        size={Button.sizes.medium}
                        outline
                        style={Style.btnConfirmQuestionnaire}
                    />
                    <Button
                        label={'Confirmar'}
                        enableShadow
                        style={Style.btnConfirmQuestionnaire}
                    />
                </View>

            </View>
        );
    }
    
    render(){
        return (
            <View >
                {this.renderRadioButtonForColorEnum(Questionnaire.colors.DEFAULT)}
            </View>
        );
    };
}