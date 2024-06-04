import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { ITask } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input() selectedID;
  @Input() selectedUser;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.selectedID);
  }

  // onCompleteTask(id: string) {
  //   return this.tasksService.removeTask(id);
  // }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
