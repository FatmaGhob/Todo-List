import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/Todo';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getAllTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiServerUrl}/task/all`);
  }

  public addNewTask(Task: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.apiServerUrl}/task/add`, Task);
  }
  public getTaskById(taskId: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiServerUrl}/task/view/${taskId}`);
  }

  public deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/task/delete/${taskId}`);
  }

  public updateTask(
    taskId: number,
    completed: boolean,
    selected: boolean
  ): Observable<void> {
    return this.http.put<void>(
      `${this.apiServerUrl}/task/update/${taskId}`,
      completed
    );
  }
}
