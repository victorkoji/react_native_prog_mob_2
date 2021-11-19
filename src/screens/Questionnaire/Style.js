import { StyleSheet } from 'react-native'

export const Style = StyleSheet.create({
    questionnaire:{
        // backgroundColor: '#F7F7F0',
        // opacity: 37,
    },
    text_question:{
        paddingTop: 5,
        fontSize: 15,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    radionButtonSize:{
        fontSize: 2,
        marginBottom: 10,
        marginLeft: 10
    },
    commentQuestions:{
        textAlign: 'justify',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        paddingBottom: 20,
        fontWeight: 'bold'
    },
    btnConfirmQuestionnaire:{
        marginRight: 10
    },
    btnActionQuestionnaire: {
        display: 'flex',
        flexDirection: 'row-reverse',
        marginLeft: 10,
        marginRight: 10,
        
    },
    segmentQuestion: {
        backgroundColor: 'white',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 15,
        marginBottom: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
    }
});
