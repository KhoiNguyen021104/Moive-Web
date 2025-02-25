import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribed = auth.onIdTokenChanged((user) => {
      console.log("🚀 ~ useEffect ~ user:", user);
    });
    return () => {
      unsubscribed();
    };
  }, [auth]);

  useEffect(() => {
    console.log('🚀 ~ AuthProvider ~ user:', user)
  }, [user])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
