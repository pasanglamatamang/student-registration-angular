import {HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Student } from "../student";


@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private studentsURL = 'http://localhost:444/api';

    constructor(private http: HttpClient){
    }

    public getAllStudents(): Observable<Student[]> {
        return this.http.get<Student[]>('${this.studentsURL}/students');
    }

/*
    public getStudentById(id) {
        const url = '${this.studentsURL}/students/${id}';
        return this.http.get<Student>(url);
    }
*/ 

    public addStudent(student: Student): Observable<Student>{
        //return this.http.post<Student>('${this.studentsURL}/api/addStudent', student);
        const url = '${this.studentsURL}/addStudent';
        return this.http.post<Student>(url, student);

    }

    public updateStudent(id: Student, student: Student): Observable<Student>{
        const url = '${this.studentsURL}/updateStudent/${id}';
        return this.http.put<Student>(url, student);
    }

    deleteStudent(id: Student): Observable<void>{
        const url = '${this.studentsURL}/deleteStudent/${id}';
        return this.http.delete<void>(url);
    }

    
}