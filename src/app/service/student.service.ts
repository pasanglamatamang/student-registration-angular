import {HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Student } from "../student";


@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private studentsURL = 'http://localhost:444/api';

    constructor(private http: HttpClient){
    }

    getAllStudents(){
        return this.http.get<Student[]>('${this.studentsURL}/students');
    }

    getStudentById(id){
        const url = '${this.studentsURL}/students/${id}';
        return this.http.get<Student>(url);
    }

    addStudent(student){
        //return this.http.post<Student>('${this.studentsURL}/api/addStudent', student);
        const url = '${this.studentsURL}/addStudent';
        return this.http.get<Student>(url, student);

    }

    updateStudent(id, student){
        const url = '${this.studentsURL}/updateStudent/${id}';
        return this.http.put<Student>(url, student);
    }

    deleteStudent(id){
        const url = '${this.studentsURL}/deleteStudent/${id}';
        return this.http.delete(url);
    }

    
}