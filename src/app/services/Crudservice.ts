import { Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
//
// interface Course {
//   description: string;
//   courseListIcon:string;
//   iconUrl:string;
//   longDescription:string;
//   url:string;
// }


// https://www.positronx.io/angular-service-tutorial-with-example/
// https://blog.angular-university.io/angular-http/
export class Crudservice {

  // apiUrl: string = 'https://jsonplaceholder.typicode.com/todos/1';
  apiUrl: string = 'https://angular-http-guide.firebaseio.com/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  //courses$: Observable<Course[]>;
  courses$: Observable<any>;

  // Create
  createTask(data): Observable<any> {
    const API_URL = `${this.apiUrl}/create-task`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.error)
      )
  }

  // Read
  showTasks2() {
    return this.http.get(`${this.apiUrl}`);
  }

  showTasks() {
  this.courses$ = this.http
    .get("/courses.json").
    .map(data => _.values(data))
    .do(console.log);
}


  // Update
  updateTask(id, data): Observable<any> {
    let API_URL = `${this.apiUrl}/update-task/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      catchError(this.error)
    )
  }

  // Delete
  deleteTask(id): Observable<any> {
    var API_URL = `${this.apiUrl}/delete-task/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.error)
    )
  }

  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}

