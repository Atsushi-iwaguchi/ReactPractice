import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

const USER_NAME_KEY = "user-name";

export const useAuth = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    isLoginCheckDone,
    setIsLoginCheckDone,
    userName,
    setUserName,
  } = useContext(AuthContext);

  const login = () => {
    if (!userName) {
      alert("名前を入力しください");
    } else {
      setIsLoggedIn(true);
      localStorage.setItem(USER_NAME_KEY, userName);
    }
  };
  const logout = () => {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.removeItem(USER_NAME_KEY);
  };

  //マウント時にローカルストレージからユーザー名取得する, ユーザー名が取得できた場合はログイン中として扱う
  useEffect(() => {
    const userNameData = localStorage.getItem(USER_NAME_KEY);
    if (userNameData) {
      setUserName(userNameData);
      setIsLoggedIn(true);
    }
    setIsLoginCheckDone(true);
  });

  return { isLoggedIn, isLoginCheckDone, login, logout, userName, setUserName };
};
