import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs';
import {Student} from "../student";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  public getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.API_URL}` + '/students');
  }


  public addStudent(student: Student): Observable<Student> {
    console.log(student);

    return this.http.post<Student>(`${this.API_URL}` + '/addStudent', student);
    // return this.http.post<Student>('http://localhost:444/api/addStudent', student);

  }

  public updateStudent(id: Student, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.API_URL}` + '/updateStudent/${id}', student);
  }

  deleteStudent(id: Student): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}` + '/deleteStudent/${id}');
  }


}
