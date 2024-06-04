import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { ITask } from './new-task/new-task.component';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = DUMMY_TASKS;
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => {
      return task.userId === userId;
    });
  }

  addTask(taskData: ITask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
