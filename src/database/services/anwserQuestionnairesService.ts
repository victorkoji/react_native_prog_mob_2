import { DatabaseConnection } from '../connection'
import { AnwserQuestionnaires } from '../models/AnwserQuestionnaires';

const table = "anwser_questionnaires"
const db = DatabaseConnection.getConnection()

export default class anwserQuestionnairesService {
  static addData(param: AnwserQuestionnaires) {
    return new Promise((resolve, reject) => db.transaction(
      tx => {
        tx.executeSql(`insert into ${table} (student_id, questionnaire_id, question_1, question_2, question_3) values (?)`, [ param.student.id, param.questionnaire.id, param.answer.question_1, param.answer.question_2, param.answer.question_3 ],
          (_, { insertId, rows }) => {
            console.log("id insert: " + insertId);
            resolve(insertId)
          }), (sqlError) => {
            console.log(sqlError);
          }
      }, (txError) => {
        console.log(txError);
      }));
  }

  static deleteById(id: number) {
    db.transaction(
      tx => {
        tx.executeSql(`delete from ${table} where id = ?;`, [id], (_, { rows }) => {
        }), (sqlError) => {
          console.log(sqlError);
        }
      }, (txError) => {
        console.log(txError);

      });
  }

  static updateById(param: AnwserQuestionnaires) {
    return new Promise((resolve, reject) => db.transaction(tx => {
      tx.executeSql(`update ${table} set nome = ? where id = ?;`, [ param.student.id, param.questionnaire.id, param.answer.question_1, param.answer.question_2, param.answer.question_3 ], () => {
      }), (sqlError) => {
        console.log(sqlError);
      }
    }, (txError) => {
      console.log(txError);

    }));
  }

  static findById(id: number) {
    return new Promise((resolve, reject) => db.transaction(tx => {
      tx.executeSql(`select * from ${table} where id=?`, [id], (_, { rows }) => {
        resolve(rows)
      }), (sqlError) => {
        console.log(sqlError);
      }
    }, (txError) => {
      console.log(txError);

    }));
  }

  static findAll() {
    return new Promise((resolve, reject) => db.transaction(tx => {
      tx.executeSql(`select * from ${table} aws INNER JOIN student s ON aws.student_id = s.id`, [], (_, { rows }) => {
        console.log('LOG =>', rows)
        resolve(rows)
      }), (sqlError) => {
        console.log(sqlError);
      }
    }, (txError) => {
      console.log(txError);
    }))
  }

}