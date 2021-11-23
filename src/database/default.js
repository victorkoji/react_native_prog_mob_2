import { DatabaseConnection } from './connection'

var db = null
export default class DatabaseInit {

  constructor() {
    db = DatabaseConnection.getConnection()
    db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () => console.log('Foreign keys turned on'));
    this.InitDb()
  }

  InitDb() {
    var sql = [
      `DROP TABLE IF EXISTS users;`,

      `DROP TABLE IF EXISTS student;`,

      `DROP TABLE IF EXISTS admin;`,

      `DROP TABLE IF EXISTS anwser_questionnaires;`,

      `CREATE TABLE IF NOT EXISTS users (
        id integer primary key autoincrement,
        email text UNIQUE,
        password text,
        tipo_usuario text
      );`,

      `CREATE TABLE IF NOT EXISTS student (
        id integer primary key autoincrement,
        name text,
        user_id integer
      );`,

      `CREATE TABLE IF NOT EXISTS admin (
        id integer primary key autoincrement,
        name text,
        user_id integer
      );`,

      `CREATE TABLE IF NOT EXISTS anwser_questionnaires (
        id integer primary key autoincrement,
        student_id integer,
        question_1 integer, 
        question_2 integer, 
        question_3 integer
      );`,

      `INSERT INTO users (email, password, tipo_usuario) VALUES 
        ("mateus@gmail.com", "21232f297a57a5a743894a0e4a801fc3", "admin"),
        ("victor@gmail.com", "21232f297a57a5a743894a0e4a801fc3", "admin"),
        ("fernando@gmail.com", "21232f297a57a5a743894a0e4a801fc3", "admin"),
        ("aluno@gmail.com", "21232f297a57a5a743894a0e4a801fc3", "aluno");
      `,

      `INSERT INTO admin (name, user_id) VALUES 
        ("Mateus", 1), 
        ("Victor", 2), 
        ("Fernando", 3);
      `,

      `INSERT INTO student (name, user_id) VALUES 
        ("Aluno Teste", 4);
      `,

      `INSERT INTO anwser_questionnaires (student_id, question_1, question_2, question_3) VALUES (1, "question 1", "question 2", "question 3");`
    ];

    db.transaction(
      tx => {
        for (var i = 0; i < sql.length; i++) {
          console.log("execute sql : " + sql[i]);
          tx.executeSql(sql[i]);
        }
      }, (error) => {
        console.log("error call back : " + JSON.stringify(error));
        console.log(error);
      }, () => {
        console.log("transaction complete call back ");
      }
    );
  }

}