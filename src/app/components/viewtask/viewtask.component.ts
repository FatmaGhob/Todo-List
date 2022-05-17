import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css'],
})
export class ViewtaskComponent implements OnInit {
  id: number = 0;
  currTaskbyId: Todo = new Todo();
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '{}');
    this.editTask();
  }

  public editTask(): void {
    this.taskService.getTaskById(this.id).subscribe({
      next: (response: Todo) => {
        this.currTaskbyId.content = response.content;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
