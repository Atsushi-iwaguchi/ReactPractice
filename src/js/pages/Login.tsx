import { Heading } from "../components/parts/Heading";
import { TextField } from "../components/parts/TextField";
import { useAuth } from "../hooks/use-auth";

export const Login = () => {
  const { login, userName, setUserName } = useAuth();
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
