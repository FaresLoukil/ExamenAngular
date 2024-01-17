import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {Project} from "../models/project";
import {Task} from "../models/task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
   listTasks : Task[] = []
constructor(private api:ApiService) {
}
ngOnInit() {
     this.getTasks();
}

  getTasks() {
    console.log("fr", this.listTasks);

    this.api.getTask().subscribe({
      next: (data) => {
        this.listTasks = data as Task[];
        console.log("ee", this.listTasks); // Move the console.log inside the subscribe bloc
        console.log("ee2",data)
      },
      error: (error) => {
        console.error('Error fetching tasks', error);
      }
    });
  }


}
