import { useState, useEffect } from "react";
import { Todo } from "./type";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  //マウント時にlocalStorageからtodo一覧データを取得する
  useEffect(() => {
    const todoListData = localStorage.getItem("todo-list");
    if (todoListData) {
      setTodoList(JSON.parse(todoListData));
    }
  }, []);

  //todoListが更新するたびにLocalStorageにデータを保存する
  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todoList));
  }, [todoList]);

  return { todoList, setTodoList}
};
