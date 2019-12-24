import { Component, OnInit } from '@angular/core';

import { GithubApiService } from './services/github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Git Commits';
  commits: object;

  constructor(private github: GithubApiService) {
  }

  ngOnInit(): void {
    this.github.getCommits().subscribe(
      (res) => {
        this.commits = res;
      }
    );
  }
}
