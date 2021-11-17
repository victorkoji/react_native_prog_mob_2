export class Questionnaires {
  constructor() {
    this.id = 1;
    this.question = {
      question_1: {
        title: "Teste 1",
        type: "text",
        alternatives: []
      },
      question_2: {
        title: "Teste 2",
        type: "choice",
        alternatives: [
          {
            title: "Teste 1"
          },
          {
            title: "Teste 2"
          },
          {
            title: "Teste 3"
          },
          {
            title: "Teste 4"
          }
        ]
      },
      question_3: {
        title: "Teste 3",
        type: "choice",
        alternatives: [
          {
            title: "Teste 1"
          },
          {
            title: "Teste 2"
          },
          {
            title: "Teste 3"
          },
          {
            title: "Teste 4"
          }
        ]
      }
    }
  }

  public id: number;
  public question: Object;
}