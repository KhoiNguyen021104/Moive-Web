import { Link, useNavigate } from "react-router";
import { useState } from "react";

import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { registerAPI } from "../../../apis/apis";

const cx = classNames.bind(styles);

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    displayName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const handleRegister = async () => {
    if(formData.password !== formData.confirmPassword) {
      alert("Mật khẩu không trùng kh��p!");
      return;
    }
    delete formData.confirmPassword
    console.log("🚀 ~ handleRegister ~ formData:", formData);
    const response = await registerAPI(formData);
    console.log('🚀 ~ handleRegister ~ response:', response)
    if (response) {
      alert("Register successful!");
      navigate("/dang-nhap");
    }
  };
  return (
    <div className={cx("login__wrapper")}>
      <h1>Đăng ký</h1>
      <form>
        <input
          type='text'
          name='displayName'
          placeholder='Tên hiển thị'
          onChange={(e) =>
            setFormData({ ...formData, displayName: e.target.value })
          }
          value={formData.displayName}
        />
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
        <input
          type='password'
          name='confirmPassword'
          placeholder='Xác nhận mật khẩu'
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          value={formData.confirmPassword}
        />
        <button type="button" onClick={handleRegister}>Đăng ký</button>
        <p>
          Bạn đã có tài khoản? <Link to='/dang-nhap'>Đăng nhập</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
