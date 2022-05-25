import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/Todo';
import { baseUrl } from 'src/environments/environment';
// import { TokenInterceptor } from './token.interceptor.service';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  
  idToken = localStorage.getItem('id_token');
  constructor(private http: HttpClient) {}
  
  headers:HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json",
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
    "Access-Control-Allow-Headers":"Content-Type, Authorization, X-Requested-With",
    "Authorization": `Bearer ${this.idToken}`,
      Accept:"*/*"
  
  });

  public getAllTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${baseUrl}tasks/all`,{headers :this.headers});
  }

  public addNewTask(Task: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${baseUrl}tasks`, Task);
  }
  public getTaskById(taskId: number): Observable<Todo> {
    return this.http.get<Todo>(`${baseUrl}${taskId}`);
  }

  public deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}${taskId}`);
  }

  public updateTask(
    taskId: number,
    task : Todo
  ): Observable<void> {
    return this.http.put<void>(
      `${baseUrl}${taskId}`,
      task
    );
  }

  public clearTask(){
    return this.http.delete<void>(`${baseUrl}clear`);
  }

}
