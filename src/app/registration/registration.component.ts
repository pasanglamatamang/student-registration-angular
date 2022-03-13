import { HttpErrorResponse } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../service/student.service';
import {Student} from "../student";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  student: Student = new Student;

  constructor(public studentService: StudentService) {

  }

  ngOnInit(): void {
    //this.student = new Student();
  }

  registerStudent(addForm: NgForm) {
    this.studentService.addStudent(addForm.value).subscribe(
      (response: Student) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    );
    
  }
}
