import { TodoListComponent } from "./todo-list.component";
import { TodoListService } from "../../service/todo-list.service";
import { of } from "rxjs";

describe("TodoListComponent", () => {
  let component: TodoListComponent;
  let todoService: TodoListService = {
    getTodoList: jest.fn(),
  } as unknown as TodoListService;

  beforeEach(async () => {
    component = new TodoListComponent(todoService);
    component.todoLists = [];
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should add a new todo item with the correct values when task and date form control values are provided", () => {
    component.form.controls["task"].setValue("นอนต่อ");
    component.form.controls["date"].setValue("31/01/2023 เวลา 09.30 น.");

    component.addTodo();

    expect(component.todoLists).toEqual([
      {
        task: "นอนต่อ",
        date: "31/01/2023 เวลา 09.30 น.",
        status: false,
        time: "",
      },
    ]);
  });

  it("should toggle the status of the todo item at the given index when called", () => {
    component.todoLists = [
      {
        task: "ตื่นนอน",
        date: "31/01/202 เวลา 09.00 น",
        status: false,
        time: "",
      },
      {
        task: "นอนต่อ",
        date: "31/01/2023 เวลา 09.30 น",
        status: true,
        time: "",
      },
    ];

    component.updateStatus(0);
    expect(component.todoLists[0].status).toBe(true);

    component.updateStatus(1);
    expect(component.todoLists[1].status).toBe(false);
  });

  it("should be able to delete todo in list according to the selected index", () => {
    component.todoLists = [
      {
        task: "ตื่นนอน",
        date: "31/01/2023 เวลา 09.00 น.",
        status: false,
        time: "",
      },
      {
        task: "แปลงฟัน",
        date: "31/01/2023 เวลา 09.15 น.",
        status: false,
        time: "",
      },
    ];

    component.deleteTodo(0);

    expect(component.todoLists).toEqual([
      {
        task: "แปลงฟัน",
        date: "31/01/2023 เวลา 09.15 น.",
        status: false,
        time: "",
      },
    ]);
  });

  it("should subscribe to the getTodoList observable and assign the result to todoLists", () => {
    jest
      .spyOn(todoService, "getTodoList")
      .mockReturnValue(
        of([{ task: "Task 1", date: "2022-01-01", status: false, time: "" }])
      );

    component.ngOnInit();

    expect(component.todoLists).toEqual([
      { task: "Task 1", date: "2022-01-01", status: false, time: "" },
    ]);
  });
});
