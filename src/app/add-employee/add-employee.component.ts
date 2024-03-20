import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Employee } from 'src/assets/Employee';
import { CommonServiceService } from '../common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  constructor(private service: CommonServiceService, private route: Router) {}

  myForm: any = new FormGroup({
    employeeName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
      Validators.pattern('[a-zA-Z]*'),
    ]),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern('[0-9]*'),
    ]),
    emailId: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(100),
    ]),
  });

  saveForm() {
    const payload: Employee = this.myForm.value;
    this.service.createEmployee(payload).subscribe((data: any) => {
      this.route.navigateByUrl('/list');
    });
  }

  get name() {
    return this.myForm.get('employeeName');
  }

  get email() {
    return this.myForm.get('emailId');
  }

  get phone() {
    return this.myForm.get('mobileNumber');
  }

  ngOnInit(): void {}
}
