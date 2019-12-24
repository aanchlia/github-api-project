import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';

import { GithubApiService } from './services/github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Git Commits';
  branches: object;
  displayedColumns: string[] = ['name', 'email', 'date', 'message'];
  loading = true;

  commits = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private github: GithubApiService) { }

  ngOnInit(): void {
    this.fetchCommits();
    this.fetchBranches();
  }

  fetchCommits() {
    this.github.getCommits().subscribe(
      (res) => {
        for (const data of res) {
          this.loading = false;
          this.commits.data = res;
          this.commits.paginator = this.paginator;
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
