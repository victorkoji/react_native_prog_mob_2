import { Student } from './Student';
import { Questionnaires } from './Questionnaires';
import StudentService from '../services/studentService';

export class AnwserQuestionnaires {
  constructor(id?: number, student?: Student, anwser?: any) {
    this.id = id;
    this.student = student;
    this.questionnaire = new Questionnaires();
    this.answer = anwser;
  }

  public id: number;
  public student: Student;
  public questionnaire: Questionnaires;
  public answer: any;

  public getStudentByID(student_id: number) {
    if (this.student) return this.student;

    StudentService.findById(student_id).then(response => {
      this.student = response as Student;
    });
  }
}