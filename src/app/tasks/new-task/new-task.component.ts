import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancelTask = new EventEmitter();

  @Input() userId = '';

  constructor(private tasksService: TasksService) {}

  onSubmit(ngform: NgForm) {
    const formValue = ngform.form.value;
    const taskId = new Date().getTime().toString();
    const task = {
      id: taskId,
      userId: this.userId,
      title: formValue.title,
      summary: formValue.summary,
      dueDate: formValue.dueDate,
    };
    this.tasksService.addTask(task);
    this.cancelTask.emit();
  }

  onCancelTask() {
    this.cancelTask.emit();
  }
}
