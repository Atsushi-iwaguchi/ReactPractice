import { TodoList } from "./components/todo/TodoList";
import { Heading } from "./components/parts/Heading";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { Todo } from "./components/todo/type";
import { useTodoList } from "./components/todo/use-todo-list";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { TextField } from "./components/parts/TextField";

export const App = () => {
  const { todoList, setTodoList, addTodo } = useTodoList();
  const { isLoggedIn, setIsLoggedIn, userName, setUserName } =
    useContext(AuthContext);

  if (!isLoggedIn) {
    return (
      <main className="w-4/5 my-0 text-center">
        <Heading level="h1">ログイン</Heading>
        <div className="flex gap-1">
          <TextField
            id="newTask"
            label="ユーザー名"
            type="text"
            value={userName}
            onChange={setUserName}
          />
          <button
            className="px-1 w-fit bg-red-100"
            onClick={() => setIsLoggedIn(true)}
          >
            ログイン
          </button>
        </div>
      </main>
    );
  }
  return (
    <main className="w-4/5 my-0 text-center">
      <Heading level="h1">TODO</Heading>
      <div>{userName}</div>
      <div>
        <button
          className="px-1 w-fit bg-red-100"
          onClick={() => setIsLoggedIn(false)}
        >
          ログアウト
        </button>
      </div>
      <div className="mt-8">
        <Heading level="h2">新規Todo作成</Heading>
        <NewTodoForm addTodo={addTodo} />
      </div>

      <div className="mt-8">
        <Heading level="h3">Todo一覧</Heading>
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </main>
  );
};
export { Todo };
