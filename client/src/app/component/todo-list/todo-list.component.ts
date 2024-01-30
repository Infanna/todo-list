import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

interface ITodoList {
  task: string;
  date: string;
  status: boolean;
}

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent {
  todoLists: ITodoList[] = [
    {
      task: "ตื่นนอน",
      date: "31/01/2023 เวลา 09.00 น.",
      status: false,
    },
  ];

  form = new FormGroup({
    task: new FormControl(),
    date: new FormControl(),
    status: new FormControl(false),
  });

  addTodo() {
    this.todoLists.push({
      task: this.form.controls["task"].value || "",
      date: this.form.controls["date"].value || "",
      status: false,
    });
  }

  updateStatus(index: number){
    this.todoLists[index].status = !this.todoLists[index].status
  }

  deleteTodo(index: number) {
    this.todoLists.splice(index, 1);
  }
}
