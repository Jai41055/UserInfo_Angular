import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from 'src/assets/Employee';
import { Observable } from 'rxjs';

export const HTTP_OPTIONS = {
  headers: new HttpHeaders({})
    .append('Content-Type', 'application/json')
    .append('Access-Control-Allow-Origin', '*'),
  responseType: 'text' as 'json',
};

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  baseURL = 'http://localhost:8080/employees';

  constructor(private http: HttpClient) {}

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseURL}/allEmployees`);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.http.post(`${this.baseURL}/addEmployee`, employee);
  }

  getEmployeeById(id: Number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseURL}/getDetails/${id}`);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseURL}/updateEmployee`, employee);
  }

  deleteEmployee(id: Number): Observable<any> {
    return this.http.delete(
      `${this.baseURL}/deleteEmployee/${id}`,
      HTTP_OPTIONS
    );
  }
}
