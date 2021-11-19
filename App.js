import React from 'react';
import { createAppContainer } from 'react-navigation';

import AlunoService from './src/database/services/alunoService';
import DatabaseInit from './src/database/default';

import { isSignedIn } from "./src/services/auth";
import { NavigationStackHome } from './src/routes/routes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    new DatabaseInit
    AlunoService.findAll().then((response) => {
      console.log(response)
    })
  }

  state = {
    signed: false,
    signLoaded: false,
  };

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signed: res, signLoaded: true }))
      .catch(err => alert("Erro"));
  }

  render() {
    const { signLoaded, signed } = this.state;
  
    if (!signLoaded) {
      return null;
    }

    const Layout = createAppContainer(NavigationStackHome(signed));

    return (  <Layout /> )
  }
}
