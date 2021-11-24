import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { View, Text, RadioButton, RadioGroup} from "react-native-ui-lib";
import { Style } from "./Style";
import Alternatives from "../Alternatives/Alternatives";

export default class Question extends React.Component{
    keyExtractor = (item) => item.id;
    
    state = {
        saveAlternative: null
    }

    renderQuestion(question){
        return(
            <View style={Style.segmentQuestion}>
                <Text style={Style.text_question}>
                    {question.title}
                </Text>
                <Alternatives 
                    questionRef={question.id}
                    saveAlternative={this.state.saveAlternative}
                    onChangeQuestion={this.props.onChangeQuestion}
                    alternatives={question.alternatives}/>
            </View>
        )
    }
    render() {
        var questions = this.props.questions
        return (
            <FlatList
                data={questions}
                renderItem={({ item }) => this.renderQuestion(item)}
                keyExtractor={this.keyExtractor}
            />
            
        );
    }
}