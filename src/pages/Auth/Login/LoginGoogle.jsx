import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router";

function LoginGoogle() {
  const auth = getAuth();
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
    const token = await res.user.getIdToken();
    setUser(res);
    const resLogin = await axios.post(
      "http://localhost:8017/v1/users/login/google",
      { token }
    );
    if (resLogin) {
      localStorage.setItem("token", resLogin.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
      navigate("/");
    }
  };

  return (
    <div className='login__wrapper'>
      <button onClick={handleLoginWithGoogle}>Login with GG</button>
    </div>
  );
}

export default LoginGoogle;
