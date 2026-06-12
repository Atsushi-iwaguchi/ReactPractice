import { useState, useEffect } from "react";
import { Todo } from "../components/todo/type";

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

  const addTodo = (newTask: string, newPerson: string, newDeadline: string) =>
    setTodoList((prev) => [
      ...prev,
      {
        id: Date.now(),
        task: newTask,
        person: newPerson,
        deadline: newDeadline,
      },
    ]);

  return { todoList, setTodoList, addTodo };
};
