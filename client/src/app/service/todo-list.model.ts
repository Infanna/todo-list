export interface ITodoList {
    task: string;
    date: string;
    time: string;
    status: boolean;
}

export class TodoList implements ITodoList {
    task: string;
    date: string;
    time: string;
    status: boolean;

    constructor(todoList?: Partial<ITodoList>) {
        this.task = todoList?.task ?? '';
        this.date = todoList?.date ?? '';
        this.time = todoList?.time ?? '';
        this.status = todoList?.status ?? false;
    }
}