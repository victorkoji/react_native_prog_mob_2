export class Aluno {
  constructor(id?: number, nome?: string) {
    this.id = id;
    this.nome = nome;
  }

  public id: number;
  public nome: string;
}