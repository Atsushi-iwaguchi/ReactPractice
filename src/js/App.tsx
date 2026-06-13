import { useAuth } from "./hooks/use-auth";
import { useTodoList } from "./hooks/use-todo-list";
import { Login } from "./pages/Login";
import { TodoDetail } from "./pages/TodoDetail";
import { TodoPage } from "./pages/Todopage";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider,} from "react-router-dom"


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login/>}/>
      <Route path="/todo" element={<TodoPage/>}/>
      <Route path="/todo/:id" element={<TodoDetail/>}/>
    </>
  )
)


export const App = () => <RouterProvider router={router} />