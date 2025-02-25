import { Link, useNavigate } from "react-router";
import { loginAPI } from "../../../apis/apis";
import { useState } from "react";

import classNames from "classnames/bind";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleLogin = async () => {
    console.log("🚀 ~ handleLogin ~ formData:", formData);
    const response = await loginAPI(formData);
    if (response) {
      const user = {
        _id: response._id,
        username: response.username,
        displayName: response.displayName,
      };
      localStorage.setItem("user", JSON.stringify(user));
      alert("Login successful!");
      navigate("/");
    }
  };
  return (
    <div className={cx("login__wrapper")}>
      <h1>Đăng nhập</h1>
      <form>
        <input
          type='text'
          name='username'
          placeholder='Tên đăng nhập'
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
          value={formData.username}
        />
        <input
          type='password'
          name='password'
          placeholder='Mật khẩu'
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          value={formData.password}
        />
        <button onClick={handleLogin} type='button'>
          Đăng nhập
        </button>
        <p>
          Bạn chưa có tài khoản? <Link to='/dang-ky'>Đăng ký</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
