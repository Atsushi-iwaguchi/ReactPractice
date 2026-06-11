import { TodoList } from "./components/todo/TodoList";
import { Heading } from "./components/parts/Heading";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { Todo } from "./components/todo/type";
import { useTodoList } from "./components/todo/use-todo-list";

export const App = () => {
  const {todoList, setTodoList} = useTodoList()

  return (
    <main className="w-4/5 my-0 text-center">
      <Heading level="h1">TODO</Heading>
      <div className="mt-8">
        <Heading level="h2">新規Todo作成</Heading>
        <NewTodoForm setTodoList={setTodoList} />
      </div>

      <div className="mt-8">
        <Heading level="h3">Todo一覧</Heading>
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </main>
  );
};
export { Todo };
