import { Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, map, flatMap, take, filter, retry, delay, first} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import {Todo} from './Models';

@Injectable({
  providedIn: 'root' // global service
})



// https://www.positronx.io/angular-service-tutorial-with-example/
// https://blog.angular-university.io/angular-http/

export class Crudservice {

  apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }

  constructor(private http: HttpClient) { }

  allTodos: Todo[]

  getTodo(id) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const API_URL = `${this.apiUrl}/${id}`;

    this.http
      .get<Todo>(API_URL, {headers}).subscribe(data => {
      console.log(data.title)
    })


    const doubleBy = x => map(todo => Number((<Todo>todo as Todo ).id) * x);


    const log = map(x => console.log(Number((<Todo>x as Todo).id)))
    const log2 = map(x => console.log(x))

    const obs  = this.http.get<Todo>(API_URL, {headers})


    obs.pipe(doubleBy(3), log2 )
      .subscribe()



  }


  getAllTodos(): Observable<Todo[]> {
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }

    const obs = this.http
      .get<Todo[]>(this.apiUrl, {headers}).pipe(delay(40))
      obs.subscribe(data => {
      console.log("setting in service")
      this.allTodos = data
    })

    return obs
  }

  getAllTodos2() {
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }


    this.http
      .get<Todo[]>(this.apiUrl, {headers})
      .pipe(
        flatMap(todo => todo)
      ,
      take(20)
  )
      .subscribe(todo => {
      console.log("what " + todo.id)
    })

    this.http
      .get<Todo[]>(this.apiUrl, {headers}).subscribe(data => {
      console.log("what " + data)
      this.allTodos = data
    })

  }


  // Create
  createTodo(data): Observable<any> {
    const API_URL = `${this.apiUrl}`;
    const obs =  this.http.post(API_URL, data).pipe(
      map (res =>  res),
      catchError(this.error)

    )
      obs.subscribe( data => console.log(data as Todo))

       // catchError(this.error)
  return obs
  }

  // Read
  showTasks2() {
    return this.http.get(`${this.apiUrl}`);
  }



  // Update
  updateTodo(id, data): Observable<any> {
    let API_URL = `${this.apiUrl}/update-task/${id}`;
    return this.http.put(API_URL, data).pipe(
      catchError(this.error)
    )
  }

  // Delete
  deleteTodo(id): Observable<any> {
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

export interface Todo {
  userId: string;
  id:string;
  title:string;
  completed?:string;
}
