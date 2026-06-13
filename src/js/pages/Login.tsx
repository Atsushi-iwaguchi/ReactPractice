import { useEffect } from "react";
import { Heading } from "../components/parts/Heading";
import { TextField } from "../components/parts/TextField";
import { useAuth } from "../hooks/use-auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { isLoggedIn, login, isLoginCheckDone, userName, setUserName } =
    useAuth();
  const navigate = useNavigate();

  // ログイン中であればtodoに遷移させる
  useEffect(() => {
    if (isLoginCheckDone && isLoggedIn) {
      navigate("/todo");
    }
  }, [isLoginCheckDone, isLoggedIn]);

  return (
    <main className="w-4/5 my-0 text-center">
      <Heading level="h1">ログイン</Heading>
      <div className="flex gap-1">
        <TextField
          id="newTask"
          label="ユーザー名"
          type="text"
          value={userName}
          onChange={setUserName}
        />
        <button className="px-1 w-fit bg-red-100" onClick={login}>
          ログイン
        </button>
      </div>
    </main>
  );
};
