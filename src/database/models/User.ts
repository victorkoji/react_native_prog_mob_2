const md5 = require('md5');

export class User {
  constructor(id: number, email: string, password: string) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  public id: number;
  public email: string;
  public password: string;

  static setPassword(password: string){
    return md5(password);
  }
}