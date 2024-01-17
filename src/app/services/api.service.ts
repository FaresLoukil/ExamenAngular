import { Injectable } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Project} from "../models/project";
import {Observable} from "rxjs";
import {Task} from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
apiUrlTasks="http://localhost:3000/tasks";
apiUrlProjects="http://localhost:3000/projects";
  constructor(private ac : ActivatedRoute,
              private http: HttpClient) { }
getTask():Observable<Task[]>{
  return this.http.get<Task[]>(this.apiUrlTasks);
}
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrlProjects);
  }
addTask(task : any): Observable<Task[]>{
  return this.http.post<Task[]>(this.apiUrlTasks, task);
}
  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`http://localhost:3000/tasks/${id}`);

  }
  updateTaskStatus(id: number, newStatus: string): Observable<Task> {
    const updateUrl = `${this.apiUrlTasks}/${id}`;
    const updatedTask = { status: newStatus }; // Create an object with only the status property to update

    return this.http.patch<Task>(updateUrl, updatedTask);
  }

}
