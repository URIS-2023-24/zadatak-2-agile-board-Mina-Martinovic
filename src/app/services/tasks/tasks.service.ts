import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'jquery';
import { type } from 'os';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  baseurl = "https://app.microenv.com/backend/key/f3467b9f25c9ef32ddcc94/rest/api/tasks/";

  constructor(private httpClient: HttpClient) { }

  public getTasks() : Observable<any> {
    return this.httpClient.get(this.baseurl)
   .pipe(map((response : Response)=> response));
  }
}
