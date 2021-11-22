import React from 'react';

import AlunoService from './src/database/services/alunoService';
import DatabaseInit from './src/database/default';
import AuthContext, { AuthProvider } from './src/contexts/AuthContext';

import NavigationStackHome from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component {
  static contextType = AuthContext

  constructor(props) {
    super(props);
    new DatabaseInit
    AlunoService.findAll().then((response) => {
      console.log(response)
    })
  }

  render() {
    return (  
      <AuthProvider>
        <NavigationContainer headerMode="none">
          <NavigationStackHome />
        </NavigationContainer> 
      </AuthProvider>
    )
  }
}