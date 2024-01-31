import { TodoListService } from './todo-list.service';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {ITodoList} from "./todo-list.model";

describe('TodoListService', () => {


    describe('getTodoList', () => {
      let service: TodoListService;
      let httpClient  = {
        get: jest.fn().mockReturnValue(of([])),
      } as unknown as HttpClient

      beforeEach(() => {
        service = new TodoListService(httpClient);
      });

      test('should call get todo list with current url', () => {
        service.getTodoList();
        expect(httpClient.get).toHaveBeenCalledWith('http://localhost:3000/todo-list');
      });

      test('should return with current response', () => {
        const mockResponse: ITodoList[] = [];
        jest.spyOn(httpClient, 'get').mockReturnValue(of(mockResponse));

        service.getTodoList().subscribe((result) => {
          expect(result).toEqual([]);
        });
      });
    });

    describe('getTodoListById', () => {
        let service: TodoListService;
        let httpClient = {
          get: jest.fn(),
        } as unknown as HttpClient;

        beforeEach(() => {
            service = new TodoListService(httpClient);
        });
        test('should call get todo list by id with current url', () => {
            service.getTodoListById(1);
            expect(httpClient.get).toHaveBeenCalledWith('http://localhost:3000/todo-list/1');
    });
    });
});
