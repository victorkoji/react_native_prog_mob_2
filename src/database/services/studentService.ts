import { Student } from '../models/Student'
import { DatabaseConnection } from '../connection'

const table = "student"
const db = DatabaseConnection.getConnection()

export default class StudentService {
  static addData(param: Student) {
    return new Promise((resolve, reject) => db.transaction(
      tx => {
        tx.executeSql(`insert into ${table} (name) 
                values (?)`,
          [param.name],
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

  static updateById(param: Student) {
    return new Promise((resolve, reject) => db.transaction(tx => {
      tx.executeSql(`update ${table} set name = ? where id = ?;`, [param.name, param.id], () => {
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
      tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
        resolve(rows)
      }), (sqlError) => {
        console.log(sqlError);
      }
    }, (txError) => {
      console.log(txError);
    }))
  }

  static findByUserId(id: number){
    return new Promise((resolve, reject) => db.transaction(tx => {
      tx.executeSql(`select * from ${table} where id?`, [id], (_, { rows }) => {
        resolve(rows)
      }), (sqlError) => {
        console.log(sqlError);
      }
    }, (txError) => {
      console.log(txError);

    }));
  }

}