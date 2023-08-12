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
                <div className={cx("top")}>
                    
                </div>
                <div className={cx("bottom")}></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
