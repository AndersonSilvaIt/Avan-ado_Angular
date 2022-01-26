import { Component, Input } from "@angular/core";
import { Task } from "../../tasks";

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})

export class ToDoListComponent {

    @Input()
    list: Task[];

}