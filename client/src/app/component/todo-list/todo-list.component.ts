import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { TodoListService } from "../../service/todo-list.service";
import { ITodoList } from "../../service/todo-list.model";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  constructor(private todoListService: TodoListService) {}

  todoLists: ITodoList[] = [];

  form = new FormGroup({
    task: new FormControl(),
    date: new FormControl(),
    status: new FormControl(false),
  });

  ngOnInit(): void {
    this.todoListService.getTodoList().subscribe((todoList) => {
      this.todoLists = todoList;
    });
  }

  addTodo() {
    this.todoLists.push({
      task: this.form.controls["task"].value || "",
      date: this.form.controls["date"].value || "",
      status: false,
      time: "",
    });
  }

  updateStatus(index: number) {
    this.todoLists[index].status = !this.todoLists[index].status;
  }

  deleteTodo(index: number) {
    this.todoLists.splice(index, 1);
  }
}
