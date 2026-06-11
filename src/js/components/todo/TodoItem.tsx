import React from "react";

type TodoItemProps = {
  task: string;
  person: string;
  deadline: string;
};

export const TodoItem = ({ task, person, deadline }: TodoItemProps) => {
  return (
    <li className="grid grid-cols-3">
      <div>{task}</div>
      <div>{person}</div>
      <div>締め切: {deadline}</div>
    </li>
  );
};
