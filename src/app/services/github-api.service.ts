import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) { }
  path = 'https://api.github.com/repos/aanchlia/github-api-project/commits';

  getCommits() {
    return this.http.get(this.path).pipe(
      map((response: any) => response),
      catchError(error => observableThrowError(error))
    );
  }
}
