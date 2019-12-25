import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) { }

  getCommits(branchName) {
    const path = `/commits?sha=${branchName}`;
    return this.http.get(path).pipe(
      map((response: any) => response),
      catchError(error => observableThrowError(error))
    );
  }

  getBranches() {
    const path = '/branches';
    return this.http.get(path).pipe(
      map((response: any) => response),
      catchError(error => observableThrowError(error))
    );
  }
}
