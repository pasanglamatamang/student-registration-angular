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

  message: string = "";

  ngOnInit(): void {
    //this.student = new Student();
  }

  registerStudent(addForm: NgForm) {
    this.studentService.addStudent(addForm.value).subscribe(
      (response: Student) => {
        this.message = "Successfully Registered!";
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        this.message = error.message;
      }

    );
    
  }
}
