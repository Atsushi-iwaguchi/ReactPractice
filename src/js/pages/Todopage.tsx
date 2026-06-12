import { Heading } from "../components/parts/Heading";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { TodoList } from "../components/todo/TodoList";
import { useAuth } from "../hooks/use-auth";
import { useTodoList } from "../hooks/use-todo-list";


export const TodoPage = () => {
  const { todoList, setTodoList, addTodo } = useTodoList();
  const { logout, userName } = useAuth();
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
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </main>
  );
};
