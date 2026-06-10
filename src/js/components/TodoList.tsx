import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const todos = [
    { id: 123, task: "掃除", person: "yamada", deadline: "明日まで" },
    { id: 124, task: "選択", person: "yamada", deadline: "明後日まで" },
    { id: 125, task: "買い物", person: "tanaka", deadline: "明後日まで" },
  ];
  return (
    <ul className="mt-4 ml-4 bg-emerald-100 p-4 rounded ">
      <li className="grid grid-cols-3">
        <div>タスク名</div>
        <div>担当者</div>
        <div>締め切り</div>
      </li>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          task={todo.task}
          person={todo.person}
          deadline={todo.deadline}
        />
      ))}
    </ul>
  );
};
