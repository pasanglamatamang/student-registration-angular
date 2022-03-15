import { HttpErrorResponse } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';
import {Student} from "../student";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  student: Student = new Student;

  get Email(){
    return this.formValidation.get('email')
  }

  formValidation = new FormGroup({
    email : new FormControl('',[
      Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    firstName: new FormControl(),
    lastName: new FormControl(),
    dob: new FormControl(),
    password: new FormControl()
  })


  constructor(public studentService: StudentService, private router: Router) {

  }

  message: string = "";

  ngOnInit(): void {
    //this.student = new Student();
  }

  registerStudent() {
    this.studentService.addStudent(this.formValidation.value).subscribe(
      (response: Student) => {
        this.message = "Successfully Registered!";
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        this.message = error.message;
      }
    );
  }

  showAllStudentsLink = () =>{
    this.router.navigateByUrl('/dashboard');

  };





}
