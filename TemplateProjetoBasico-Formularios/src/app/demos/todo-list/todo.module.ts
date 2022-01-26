import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TasksFinalizadasComponent } from "./components/tasks-finalizadas/tasks-finalizadas.component";
import { TasksIniciadasComponent } from "./components/tasks-iniciadas/tasks-iniciadas.component";
import { TaskComponent } from "./components/tasks/task.component";
import { ToDoListComponent } from "./components/todo-list/todo-list.component";
import { TodoComponent } from "./todo.component";
import { TasksService } from "./todo.service";
import { Store } from "./todo.store";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        TasksService,
        Store
    ],
    declarations: [
        TodoComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent,
        ToDoListComponent,
        TaskComponent
    ],
    exports: [
        TodoComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent,
        ToDoListComponent,
        TaskComponent        
    ]
})

export class TodoModule {}