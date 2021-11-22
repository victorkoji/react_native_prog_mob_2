import { StyleSheet } from 'react-native'

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  photo:{
    backgroundColor: '#c6c6c6',
    width: '30%',
    height: '20%',
    marginBottom: 20,
    borderRadius:50,
  },
  inputView:{
    width:"80%",
    backgroundColor:"#EDEFF3",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#7E7F82"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#01518B",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});
