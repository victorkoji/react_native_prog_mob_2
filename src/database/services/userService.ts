import User from "../models/User";
import { DatabaseConnection } from "../connection";

const table = "users";
const db = DatabaseConnection.getConnection();

export default class UserService {
  static addData(param: User) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `insert into ${table} (email, password, tipo_usuario) 
                values (?, ?, ?)`,
            [
              param.email,
              User.setPassword(param.password),
              param.tipo_usuario
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
            `update ${table} 
              set 
                email = ?,
                password = ?,
                tipo_usuario = ?,
              where id = ?;
            `,
            [
              param.email, 
              param.password, 
              param.tipo_usuario,
              param.id
            ],
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

  static findByIdWithAluno(id: number) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            ` select * from ${table} 
              inner join student on ${table}.id = student.user_id 
              where ${table}.id=?
            `,
            [id],
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

  static findByIdWithAdmin(id: number) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            ` select * from ${table}
              inner join admin on ${table}.id = admin.user_id 
              where ${table}.id=?
            `,
            [id],
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
