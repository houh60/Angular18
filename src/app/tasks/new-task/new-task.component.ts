import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent implements OnInit {
  @Output() formData = new EventEmitter();
  @Output() cancelTask = new EventEmitter();

  @Input() userId = '';

  ngOnInit(): void {}

  onSubmit(ngform: NgForm) {
    const formValue = ngform.form.value;
    const taskId = new Date().getTime();
    const task = {
      id: taskId,
      userId: this.userId,
      title: formValue.title,
      summary: formValue.summary,
      dueDate: formValue.dueDate,
    };
    this.formData.emit(task);
  }

  onCancelTask() {
    this.cancelTask.emit();
  }
}
