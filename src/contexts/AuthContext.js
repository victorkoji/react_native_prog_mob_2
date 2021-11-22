import React, { Component } from 'react'
import { isAuthenticated } from '../database/services/auth';

const AuthContext = React.createContext()

class AuthProvider extends Component {
  state = {
    logged: false,
  }

  componentDidMount() {
    isAuthenticated()
      .then(logged => this.setState({ logged }))
      .catch(err => alert("Erro"));
  }

  setLogged = (logged) => {
    this.setState((prevState) => ({ logged }))
  }

  render() {
    const { children } = this.props
    const { logged } = this.state
    const { setLogged } = this

    return (
      <AuthContext.Provider
        value={{
          logged,
          setLogged,
        }}
      >
        {children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContext

export { AuthProvider }