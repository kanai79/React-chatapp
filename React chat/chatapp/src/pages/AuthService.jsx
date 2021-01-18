import React, { useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // userのログイン状態の変更の監視
    // 初回実行時にuserがログインしているかどうかを確認
    auth.onAuthStateChanged((user) => {
      setLoading(false);
      // 引数のuserがnullならログインしていない
      // オブジェクトが入っているとログインしてる
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
};