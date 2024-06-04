import { Component, Input, inject } from '@angular/core';
import { TasksService } from '../tasks.service';

export type TTask = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
};

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task: TTask;
  // @Output() complete = new EventEmitter<string>();

  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
