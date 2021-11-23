export default class Admin {
  constructor(id?: number, name?: string, user_id?: number) {
    this.id = id;
    this.name = name;
    this.user_id = user_id;
  }

  public id: number;
  public name: string;
  public user_id: number;
}