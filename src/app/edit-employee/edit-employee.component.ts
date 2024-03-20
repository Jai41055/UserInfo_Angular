import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/assets/Employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  constructor(
    private service: CommonServiceService,
    private route: Router,
    private actiVateRoute: ActivatedRoute
  ) {}

  myForm: any;

  id: any;
  number: any;

  saveForm() {
    const payload: Employee = {
      id: this.id,
      employeeNumber: this.number,
      employeeName: this.myForm.value.employeeName,
      emailId: this.myForm.value.emailId,
      mobileNumber: this.myForm.value.mobileNumber,
    };
    this.service.updateEmployee(payload).subscribe((data: any) => {
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

  ngOnInit(): void {
    let id: any = this.actiVateRoute.snapshot.paramMap.get('id');
    this.id = parseInt(id);
    this.service.getEmployeeById(parseInt(id)).subscribe((data) => {
      this.number = data.employeeNumber;
      this.myForm = new FormGroup({
        employeeNumber: new FormControl(
          { value: data.employeeNumber, disabled: true },
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(10),
            Validators.pattern('[0-9]*'),
          ]
        ),
        employeeName: new FormControl(data.employeeName, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
          Validators.pattern('[a-zA-Z]*'),
        ]),
        mobileNumber: new FormControl(data.mobileNumber, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('[0-9]*'),
        ]),
        emailId: new FormControl(data.emailId, [
          Validators.required,
          Validators.email,
          Validators.maxLength(100),
        ]),
      });
    });
  }
}
