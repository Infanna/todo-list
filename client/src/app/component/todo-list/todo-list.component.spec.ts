import { TodoListComponent } from "./todo-list.component";

describe("TodoListComponent", () => {
  let component: TodoListComponent;

  beforeEach(async () => {
    component = new TodoListComponent();
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
      },
    ]);
  });

  it("should toggle the status of the todo item at the given index when called", () => {
    component.todoLists = [
      {
        task: "ตื่นนอน",
        date: "31/01/202 เวลา 09.00 น",
        status: false,
      },
      {
        task: "นอนต่อ",
        date: "31/01/2023 เวลา 09.30 น",
        status: true,
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
      },
      {
        task: "แปลงฟัน",
        date: "31/01/2023 เวลา 09.15 น.",
        status: false,
      },
    ];

    component.deleteTodo(0);

    expect(component.todoLists).toEqual([
      {
        task: "แปลงฟัน",
        date: "31/01/2023 เวลา 09.15 น.",
        status: false,
      },
    ]);
  });
});
