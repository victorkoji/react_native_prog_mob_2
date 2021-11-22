import { User } from "../models/User";
import { DatabaseConnection } from "../connection";

const table = "users";
const db = DatabaseConnection.getConnection();

export default class UserService {
  static addData(param: User) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `insert into ${table} (email, password) 
                values (?, ?)`,
            [
              param.email,
              User.setPassword(param.password)
            ],
            (_, { insertId, rows }) => {
              console.log("id insert: " + insertId);
              resolve(insertId);
            }
          ),
            (sqlError) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static deleteById(id: number) {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `delete from ${table} where id = ?;`,
          [id],
          (_, { rows }) => {}
        ),
          (sqlError) => {
            console.log(sqlError);
          };
      },
      (txError) => {
        console.log(txError);
      }
    );
  }

  static updateById(param: User) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `update ${table} set email = ? where id = ?;`,
            [param.email, param.id],
            () => {}
          ),
            (sqlError) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static findById(id: number) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `select * from ${table} where id=?`,
            [id],
            (_, { rows }) => {
              resolve(rows);
            }
          ),
            (sqlError) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static findByEmail(email: string) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `select * from ${table} where email=?`,
            [email],
            (_, { rows }) => {
              resolve(rows._array[0]);
            }
          ),
            (sqlError) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static findAll() {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
            resolve(rows);
          }),
            (sqlError) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }
}
