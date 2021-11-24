export class Questionnaires {
  constructor() {
    this.id = 1;
    this.question = [
      {
        id: 1,
        title: "Teste 1",
        type: "choice",
        alternatives: [
          {
            title: "A"
          },
          {
            title: "B"
          },
          {
            title: "C"
          },
          {
            title: "D"
          }
        ]
      },
      {
        id: 2,
        title: "Teste 2",
        type: "choice",
        alternatives: [
          {
            title: "A"
          },
          {
            title: "B"
          },
          {
            title: "C"
          },
          {
            title: "D"
          }
        ]
      },
      {
        id: 3,
        title: "Teste 3",
        type: "choice",
        alternatives: [
          {
            title: "A"
          },
          {
            title: "B"
          },
          {
            title: "C"
          },
          {
            title: "D"
          }
        ]
      },
      // {
      //   id: 4,
      //   title: "Teste 3",
      //   type: "choice",
      //   alternatives: [
      //     {
      //       title: "A"
      //     },
      //     {
      //       title: "B"
      //     },
      //     {
      //       title: "C"
      //     },
      //     {
      //       title: "D"
      //     }
      //   ]
      // },
      // {
      //   id: 5,
      //   title: "Teste 3",
      //   type: "choice",
      //   alternatives: [
      //     {
      //       title: "A"
      //     },
      //     {
      //       title: "B"
      //     },
      //     {
      //       title: "C"
      //     },
      //     {
      //       title: "D"
      //     }
      //   ]
      // },
      // {
      //   id: 6,
      //   title: "Teste 3",
      //   type: "choice",
      //   alternatives: [
      //     {
      //       title: "A"
      //     },
      //     {
      //       title: "B"
      //     },
      //     {
      //       title: "C"
      //     },
      //     {
      //       title: "D"
      //     }
      //   ]
      // }
    ]
  }

  public getFullQuestionnaire(){
    return this.question;
  }

  public id: number;
  public question: Object;
}