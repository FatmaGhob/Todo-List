import { BoundText } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, NgModule, Output, EventEmitter, IterableDiffers } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { throwError } from 'rxjs';

import { TaskService } from 'src/app/service/task.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Todo } from 'src/app/Todo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
 
  // variables
  todoTask: Todo[] = []; //Array of Task Lists
  inputTask: string = ''; // Value of Tasks that user add
  tskContent: string = "";
  taskId: number = 0; // id of the task
  isBoxSelected: boolean = false; // check that at least one checkbox is selected
  selectBtnClicked: boolean = false; // button select is clicked or not
  completeBtnClicked: boolean = false; // button delete is clicked or not
  localStorgeTasks: Todo[] = [];
  currAddedTask: Todo = new Todo();
  currTaskbyId: Todo = new Todo();
  constructor(private taskService: TaskService , private activatedRoute : ActivatedRoute , private router: Router) {}

  ngOnInit(): void {
    //get all task
    //this.editATask.emit(this.editTask(this.currTaskbyId));
    this.getTasks();
  }

  public getTasks(): void {
    this.taskService.getAllTasks().subscribe({
      next: (response: Todo[]) => {
        this.todoTask = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  // add new task
  public onAddTask(): void {
    this.addTask();
    this.taskService.addNewTask(this.currAddedTask).subscribe({
      next: (response: Todo) => {
        this.getTasks();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  /*
  {
    next: (v) => console.log(v),
    error: (e) => console.error(e),
    complete: () => console.info('complete') 
}
  */
  // Add new task and clear input field
  addTask() {
    this.currAddedTask.content = this.inputTask;
    this.currAddedTask.completed = false;
    this.currAddedTask.isSelected = false;
    this.inputTask = '';
  }

  // showItemInLocalStorage() {
  //   this.localStorgeTasks = JSON.parse(
  //     localStorage.getItem('localStorgeTasks') || '{}'
  //   );
  //   this.todoTask = this.localStorgeTasks;
  // }

  deleteTask(dtaskId: Todo) {
    console.log(dtaskId.id);
    //this.todoTask = this.todoTask.filter((e, i) => i != id);
    this.taskService.deleteTask(dtaskId.id!).subscribe({
      next: (response: void) => {
        this.getTasks();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
    this.getTasks();
  }

  // make the selected task completed or viceverse
  saveCheckedTask(id: number) {
    this.todoTask[id].isSelected = !this.todoTask[id].isSelected;
    // this.localStorgeTasks = this.todoTask;
    // localStorage.setItem(
    //   'localStorgeTasks',
    //   JSON.stringify(this.localStorgeTasks)
    // );
  }

  makeTaskCompleted() {
    const checkedTasks = this.todoTask.filter((e, i) => e.isSelected == true);

    checkedTasks.forEach((e) => {
      e.completed = true;

      this.taskService.updateTask(e.id!, e.completed, e.isSelected!).subscribe({
        next: () => {},
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      });
      //this.getTasks();
    });
    // this.localStorgeTasks = this.todoTask;
    // localStorage.setItem(
    //   'localStorgeTasks',
    //   JSON.stringify(this.localStorgeTasks)
    // );
  }

  editTask(task: Todo){
    this.router.navigate(['/task/view',task.id]);
  }

}
