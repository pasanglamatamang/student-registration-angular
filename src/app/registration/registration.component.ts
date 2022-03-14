import { HttpErrorResponse } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
    return this.formValidation.get('userEmail')
  }
  
  formValidation = new FormGroup({
    userEmail : new FormControl('',[
      Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  })


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
