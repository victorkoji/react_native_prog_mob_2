import React, { Component } from "react";
import { FlatList, Alert } from "react-native";
import {
    View,
    Button,
} from "react-native-ui-lib";

import { Questionnaires } from "../../database/models/Questionnaires";
import anwserQuestionnairesService from "../../database/services/anwserQuestionnairesService";
import Question from "./components/Question/Question";
import { Style } from "./Style";
import {getUserLogged} from "../../database/services/auth.ts";
import StudentService from "../../database/services/studentService";
import { AnwserQuestionnaires } from "../../database/models/AnwserQuestionnaires";


export default class Questionnaire extends Component {

    state = {
        questions: [],
        answers: {}
    };

    onChangeQuestion = (answers) =>{
        this.state.answers[answers.key] = answers.value
        console.log(this.state.answers)
    }

    componentDidMount(){
        this.setState({questions: new Questionnaires().getFullQuestionnaire()})
    }
    
    renderQuestionnaire() {
        return (
            <View style={Style.questionnaire}>
                <Question onChangeQuestion={this.onChangeQuestion} questions={ this.state.questions }/>
                
                <View style={Style.btnActionQuestionnaire}>
                    <Button
                        label="Cancelar"
                        size={Button.sizes.medium}
                        outline
                        style={Style.btnConfirmQuestionnaire}
                        onPress={() => {
                            this.props.navigation.navigate("Home");
                        }}
                    />
                    <Button
                        label={'Confirmar'}
                        enableShadow
                        style={Style.btnConfirmQuestionnaire}
                        onPress={() => 
                            this.saveSendQuestionnaire()
                        }
                        />
                </View>
            </View>
            
        );
    }

    async saveSendQuestionnaire(){
        console.log("this.state.answers")
        console.log(this.state.answers)
        const user = await getUserLogged();
        const student = await StudentService.findByUserId(user.id);
        const answerQuestionnaire = new AnwserQuestionnaires(null, student, this.state.answers)
        anwserQuestionnairesService.addData(answerQuestionnaire)

        this.props.navigation.navigate("Home");
    }

    render() {
        return this.renderQuestionnaire();
    }
}
