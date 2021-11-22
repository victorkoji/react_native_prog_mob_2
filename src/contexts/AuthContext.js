import React, { Component } from 'react'

const AuthContext = React.createContext()

class AuthProvider extends Component {
  state = {
    logged: false,
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