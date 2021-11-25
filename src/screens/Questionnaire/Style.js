import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-ui-lib';

export const Style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    border: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.grey70,
        paddingVertical: 10,
        paddingHorizontal: 25,
    },
    listItem: {
        padding: 0
    },
    questionnaire:{
        // backgroundColor: '#F7F7F0',
        // opacity: 37,
        flexGrow: 1
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
        marginTop: 15
        
    },
});
