import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() complete = new EventEmitter();

  ngOnInit(): void {}

  onComplete() {
    this.complete.emit(this.task.id);
  }
}
