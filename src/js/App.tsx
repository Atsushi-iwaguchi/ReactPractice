import { TodoList } from "./components/todo/TodoList";
import { Heading } from "./components/parts/Heading";
import { useState } from "react";
import { TextField } from "./components/parts/TextField";
import { NewTodoForm } from "./components/todo/NewTodoForm";

export type Todo = {
  id: number;
  task: string;
  person: string;
  deadline: string;
};

export const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return (
    <main className="w-4/5 my-0 text-center">
      <Heading level="h1">TODO</Heading>
      <div className="mt-8">
        <Heading level="h2">新規Todo作成</Heading>
        <NewTodoForm setTodoList={setTodoList} />
      </div>

      <div className="mt-8">
        <Heading level="h3">Todo一覧</Heading>
        <TodoList todoList={todoList} />
      </div>
    </main>
  );
};
