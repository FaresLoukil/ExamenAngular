import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../models/project";
import {Task} from "../models/task";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  listProjects : Project[] = []
  constructor(private ps: ApiService) { }
  ngOnInit() {
    this.ps.getProjects().subscribe({
      next : (data)=>this.listProjects = data as Project[]
    })
  }
}
