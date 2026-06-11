import React from "react";
import { Todo } from "./type";

type TodoItemProps = {
  id: number;
  task: string;
  person: string;
  deadline: string;
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodoItem = ({
  id,
  task,
  person,
  deadline,
  setTodoList,
}: TodoItemProps) => {
  return (
    <li className="grid grid-cols-4">
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
};
