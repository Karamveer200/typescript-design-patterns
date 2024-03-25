/* eslint-disable  */
class Todos {
  todos: string[] = [];

  constructor(init: string[]) {
    this.todos = init;
  }

  get getTodos(): string[] {
    return this.todos;
  }

  set addTodo(todo: string) {
    this.todos.push(todo);
  }
}

export default Todos;
