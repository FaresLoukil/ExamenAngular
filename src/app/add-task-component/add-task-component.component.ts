import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Task } from "../models/task";
import { ApiService } from "../services/api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-add-task-component',
  templateUrl: './add-task-component.component.html',
  styleUrls: ['./add-task-component.component.css']
})
export class AddTaskComponentComponent {
  id: any;

  constructor(private api: ApiService,
              private router: Router,
              private ac: ActivatedRoute) {
    this.id = this.ac.snapshot.params['id'];
  }

  addTaskForm = new FormGroup({
    title: new FormControl(''),
    dateD: new FormControl(''),
    dateF: new FormControl(''),
    status: new FormControl(''),
    project: new FormControl('')
  });

  addTask() {
    this.addTaskForm.value.status = 'To Do';
    this.addTaskForm.value.project = this.id;

    this.api.addTask(this.addTaskForm.value).subscribe({
      next: () => {
        this.router.navigate(['/tasks']);
      }
    });

    console.log("aaa", this.addTaskForm.value);
  }
}
