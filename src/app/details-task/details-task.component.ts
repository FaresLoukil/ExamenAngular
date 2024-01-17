import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Task } from "../models/task";
import { ApiService } from "../services/api.service";

@Component({
  selector: 'app-details-task',
  templateUrl: './details-task.component.html',
  styleUrls: ['./details-task.component.css']
})
export class DetailsTaskComponent {
  id: any;
  task: any;
  newStatus: string = '';

  constructor(private ac: ActivatedRoute, private ss: ApiService) {
    this.id = this.ac.snapshot.params['id'];
    console.log("id", this.id)
  }

  ngOnInit() {
    this.getTaskById(this.id);
  }

  getTaskById(id: any) {
    this.ss.getTaskById(id).subscribe({
      next: (data) => {
        this.task = data;
        console.log("Task data:", this.task);
        console.log("Task data id :", this.id);
      },
      error: (error) => {
        console.error("Error fetching task:", error);
      }
    });
  }

  updateStatus() {
    if (this.newStatus.trim() !== '') {
      this.ss.updateTaskStatus(this.task.id, this.newStatus).subscribe({
        next: (updatedTask) => {
          // Update the local task object with the updated status
          this.task.status = updatedTask.status;
          console.log("Task status updated:", this.task);
        },
        error: (error) => {
          console.error("Error updating task status:", error);
        }
      });
    } else {
      console.error("New status cannot be empty");
    }
  }
}
