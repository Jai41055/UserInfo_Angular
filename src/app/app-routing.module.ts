import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
  },
  {
    path: 'list',
    component: EmployeeListComponent,
  },
  {
    path: 'add',
    component: AddEmployeeComponent,
  },
  {
    path: 'edit/:id',
    component: EditEmployeeComponent,
  },
  {
    path: 'detail/:id',
    component: EmployeeDetailComponent,
  },
  {
    path: '**',
    component: EmployeeListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
