import React from "react";
import { TodoList } from "./components/TodoList";
import { Heading } from "./components/Heading";

export const App = () => {
  return (
    <main className="w-4/5 my-0 text-center">
      <Heading level="h1">TODO</Heading>
      <TodoList/>
    </main>
  );
};
