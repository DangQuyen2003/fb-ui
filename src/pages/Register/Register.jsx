import classNames from "classnames/bind";
import styles from "./Register.module.scss";

const cx = classNames.bind(styles);

const Register = () => {
  return (
    <div className={cx("register")}>
      <div className={cx("register-wrapper")}>
        <div className={cx("register-left")}>
          <h3 className={cx("register-logo")}>Clone UI Facebook</h3>
          <span className={cx("register-desc")}>
            Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
            của bạn.
          </span>
        </div>
        <div className={cx("register-right")}>
          <div className={cx("register-box")}>
            <form>
              <input
                type="text"
                placeholder="Họ và tên"
                id="username"
                className={cx("register-input")}
                required
              />
              <input
                type="email"
                placeholder="Email"
                id="email"
                className={cx("register-input")}
                required
              />
              <input
                type="password"
                placeholder="Password"
                id="password"
                className={cx("register-input")}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
                className={cx("register-input")}
                required
              />
              <button type="submit" className={cx("register-btn")}>
                  Đăng ký
              </button>
              <button className={cx("login-btn")}>
                  Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
