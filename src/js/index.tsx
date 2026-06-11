import React from "react";
import { createRoot } from "react-dom/client";
import { TodoList } from "./components/todo/TodoList";
import "../css/main.css";
import { App } from "./App";

// Clear the existing HTML content

// const handleClick = () => {
//     alert('ボタンがクリックされました');
// };

// const toDo = "掃除と洗濯"
// const element = (
//     <div>
//         <h1>task: {toDo}</h1>
//         <p>Reactの学習</p>
//         <button onClick={handleClick}>ボタン</button>
//     </div>
// )

// Render your React component instead
const root = createRoot(document.getElementById("app")!);
root.render(<App />);
