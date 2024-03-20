import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { Employee } from 'src/assets/Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor(private service: CommonServiceService) {}

  users: Employee[] = [];

  ngOnInit(): void {
    this.service.getEmployeeList().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }

  deleteEmployee(id: number) {
    this.service.deleteEmployee(id).subscribe((value) => {
      this.service.getEmployeeList().subscribe((data) => {
        this.users = data;
      });
    });
  }
}
