import React, { memo } from "react";
import { Todo } from "./type";
import {Link} from "react-router-dom"

type TodoItemProps = {
  id: string;
  task: string;
  person: string;
  deadline: string;
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodoItem = memo(({
  id,
  task,
  person,
  deadline,
  setTodoList,
}: TodoItemProps) => {
  return (
    <li className="grid grid-cols-5">
      <div><Link to={`/todo/${id}`}>{id}</Link></div>
      <div>{task}</div>
      <div>{person}</div>
      <div>{deadline}</div>
      <div>
        <button
          className="bg-red-400"
          onClick={() =>
            setTodoList((prev) => prev.filter((todo) => todo.id !== id))
          }
        >
          削除
        </button>
      </div>
    </li>
  );
});
