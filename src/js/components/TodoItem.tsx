import React from "react";

type TodoItemProps = {
  task: string;
  deadline: string;
};

export const TodoItem = ({ task, deadline }: TodoItemProps) => {
  return <li>{task} 締め切: {deadline}</li>;
};
