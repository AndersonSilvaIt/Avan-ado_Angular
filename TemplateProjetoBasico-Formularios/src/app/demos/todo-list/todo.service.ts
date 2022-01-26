import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "./tasks";

@Injectable()
export class TasksService {

    constructor(private http: HttpClient) { }

    getTodoList$: Observable<Task[]> = this.http
        .get<Task[]>('http://localhost:3000/todolist');

    // Ambos os métodos fazem a mesma coisa ... a diferença é que a de cima, fica sendo uma propriedade
    //getToDoList() : Observable<Task[]> {
    //    return this.http
    //        .get<Task[]>('http://localhost:3000/todolist')
    //}
}