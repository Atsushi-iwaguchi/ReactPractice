import { useEffect } from "react";
import { Heading } from "../components/parts/Heading";
import { TextField } from "../components/parts/TextField";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { TodoList } from "../components/todo/TodoList";
import { useAuth } from "../hooks/use-auth";
import { useTodoList } from "../hooks/use-todo-list";
import { useNavigate } from "react-router-dom";

export const TodoPage = () => {
  const { todoList, setTodoList, addTodo, filterWord, setFilterWord } =
    useTodoList();
  const { isLoggedIn, logout, userName } = useAuth();
  const navigate = useNavigate();

  // ログアウト中にアクセスされたら, /loginに遷移させる
  useEffect(() => {
      if (!isLoggedIn) {
        navigate("/login");
      }
    });

  return (
    <main className="w-4/5 my-0 text-center">
      <Heading level="h1">TODO</Heading>
      <div>{userName}</div>
      <div>
        <button className="px-1 w-fit bg-red-100" onClick={logout}>
          ログアウト
        </button>
      </div>
      <div className="mt-8">
        <Heading level="h2">新規Todo作成</Heading>
        <NewTodoForm addTodo={addTodo} />
      </div>

      <div className="mt-8">
        <Heading level="h3">Todo一覧</Heading>
        <div>
          <TextField
            id="filter-word"
            label="絞り込み"
            value={filterWord}
            onChange={setFilterWord}
            type="text"
          />
        </div>
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </main>
  );
};
