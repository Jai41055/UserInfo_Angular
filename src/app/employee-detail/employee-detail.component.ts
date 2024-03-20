import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/assets/Employee';
import { CommonServiceService } from '../common-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  constructor(
    private service: CommonServiceService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  user: any;
  ngOnInit(): void {
    let id: any = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getEmployeeById(parseInt(id)).subscribe((data) => {
      this.user = data;
    });
  }
}
