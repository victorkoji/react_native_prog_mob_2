const md5 = require('md5');

export default class User {
  constructor(id: number, email: string, password: string, tipo_usuario: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.tipo_usuario = tipo_usuario;
  }

  public id: number;
  public email: string;
  public password: string;
  public tipo_usuario: string;

  static setPassword(password: string){
    return md5(password);
  }
}