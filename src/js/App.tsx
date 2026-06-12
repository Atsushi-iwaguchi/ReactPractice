import { useAuth } from "./hooks/use-auth";
import { useTodoList } from "./hooks/use-todo-list";
import { Login } from "./pages/Login";
import { TodoPage } from "./pages/Todopage";


export const App = () => {
  const { todoList, setTodoList, addTodo } = useTodoList();
  const { isLoggedIn, login, logout, userName, setUserName } = useAuth();

  if (!isLoggedIn) {
    return <Login />;
  }
  return <TodoPage />;
};
