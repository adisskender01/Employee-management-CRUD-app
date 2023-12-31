import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>('https://localhost:5001/api/Employees')

  }

  addEmployee(addEmployeeRequest: Employee): Observable<any>{
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    const headers = {'Content-Type': 'application/json'};
    return this.http.post('https://localhost:5001/api/Employees', addEmployeeRequest, {headers});
  }

  getEmployee(id: string): Observable<Employee> {
   return this.http.get<Employee>('https://localhost:5001/api/Employees/' + id )
  }

  updateEmployee(id: string, updateEmployeeRequest: Employee): Observable<Employee> {
    return this.http.put<Employee>('https://localhost:5001/api/Employees/' + id, updateEmployeeRequest);
  }

  deleteEmployee(id: string): Observable<Employee>{
    return this.http.delete<Employee>('https://localhost:5001/api/Employees/' + id);
  }
}
