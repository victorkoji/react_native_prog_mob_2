import { StyleSheet } from 'react-native'
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
  floatingButton: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  floatingButtonIcon: {
    flex: 0.5, 
    marginBottom: 5, 
    alignItems: 'baseline'
  },
  buttonAdd:{
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: "#01518B",
    borderRadius: 100,
  },
  item: {

  },
  title: {
    
  }
});
