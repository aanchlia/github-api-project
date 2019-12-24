import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { GithubApiService } from './services/github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Git Commits';
  commits = new MatTableDataSource();
  // commits = [];
  branches: object;
  displayedColumns: string[] = ['name', 'email', 'date', 'message'];

  constructor(private github: GithubApiService) {
  }

  ngOnInit(): void {
    this.fetchCommits();
    this.fetchBranches();
  }

  fetchCommits() {
    this.github.getCommits().subscribe(
      (res) => {
        for (const data of res) {
          /*const buildData = {
            name: '',
            email: '',
            date: '',
            message: ''
          };
          buildData.name = data.commit.author.name;
          buildData.email = data.commit.author.email;
          buildData.date = data.commit.author.date;
          buildData.message = data.commit.message;*/
          this.commits.data = res;
        }
      }
    );
  }

  fetchBranches() {
    this.github.getBranches().subscribe(
      (res) => {
        this.branches = res;
      }
    );
  }
}
