import { TodoListComponent } from "./todo-list.component";
import {TodoListService} from "../../service/todo-list.service";

describe("TodoListComponent", () => {
  let component: TodoListComponent;
  let todoService: TodoListService;

  beforeEach(async () => {
    component = new TodoListComponent(todoService);
    component.todoLists = [];
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
