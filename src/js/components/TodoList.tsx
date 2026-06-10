import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const todos = [
    { id: 123, task: "掃除", deadline: "明日まで" },
    { id: 124, task: "選択", deadline: "明後日まで" },
    { id: 125, task: "買い物", deadline: "明後日まで" },
  ];
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} task={todo.task} deadline={todo.deadline} />
      ))}
    </ul>
  );
};
