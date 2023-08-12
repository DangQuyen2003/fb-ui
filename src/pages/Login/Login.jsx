import classNames from "classnames/bind";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

const Login = () => {
  return (
    <div className={cx("login")}>
      <div className={cx("login-wrapper")}>
        <div className={cx("login-left")}>
          <h3 className={cx("login-logo")}>Facebook</h3>
          <span className={cx("login-desc")}>
            Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
            của bạn.
          </span>
        </div>
        <div className={cx("login-right")}>
          <div className={cx("login-box")}>
            <form>
              {/* <input
                type="text"
                placeholder="Họ và tên"
                id="username"
                className={cx("login-input")}
                required
              /> */}
              <input
                type="email"
                placeholder="Email"
                id="email"
                className={cx("login-input")}
                required
              />
              <input
                type="password"
                placeholder="Password"
                id="password"
                className={cx("login-input")}
                required
              />
              {/* <input
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
                className={cx("login-input")}
                required
              /> */}
              <button type="submit" className={cx("login-btn")}>
                Đăng nhập
              </button>
              <button className={cx("create-btn")}>Tạo tài khoản mới</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
