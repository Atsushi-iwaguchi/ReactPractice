import { useParams } from "react-router-dom";
import { useTodoList } from "../hooks/use-todo-list";

export const TodoDetail = () => {
  let { id } = useParams();
  const { todoList } = useTodoList();

  const todo = todoList.find((todo) => todo.id === id);

  return (
    <div>
      <h2>detail</h2>
      <p>{todo?.id}</p>
      <p>{todo?.person}</p>
      <p>{todo?.task}</p>
    </div>
  );
};
