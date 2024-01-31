import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITodoList, TodoList} from "./todo-list.model";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  baseUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getTodoList(): Observable<TodoList[]> {
    return this.httpClient.get<ITodoList[]>(`${this.baseUrl}/todo-list`);
  }
  getTodoListById(id: number): Observable<TodoList> {
    return this.httpClient.get<ITodoList>(`${this.baseUrl}/todo-list/${id}`);
  }
}
