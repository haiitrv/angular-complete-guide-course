import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
