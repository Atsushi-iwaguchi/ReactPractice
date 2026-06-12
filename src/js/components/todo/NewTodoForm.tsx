import { useState } from "react";
import { TextField } from "../parts/TextField";

type Props = {
  addTodo: (newTask: string, newPerson: string, newDeadline: string) => void;
};

export const NewTodoForm = ({ addTodo }: Props) => {
  const [newTask, setNewTask] = useState<string>("");
  const [newPerson, setNewPerson] = useState<string>("");
  const [newDeadline, setNewDeadline] = useState<string>("");
  const addNewTodo = () => {
    addTodo(newTask, newPerson, newDeadline);

    setNewTask("");
    setNewPerson("");
    setNewDeadline("");
  };

  return (
    <div className="flex width-16">
      <TextField
        id="newTask"
        label="タスク名"
        type="text"
        value={newTask}
        onChange={setNewTask}
      />
      <TextField
        id="newPerson"
        label="担当者"
        type="text"
        value={newPerson}
        onChange={setNewPerson}
      />
      <TextField
        id="newDeadline"
        label="締め切り"
        type="date"
        value={newDeadline}
        onChange={setNewDeadline}
      />
      <button className="bg-red-100" onClick={addNewTodo}>
        追加
      </button>
    </div>
  );
};
