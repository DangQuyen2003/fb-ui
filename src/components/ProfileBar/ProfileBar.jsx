import classNames from "classnames/bind";
import styles from "./ProfileBar.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const ProfileBar = () => {
  return (
    <div className={cx("profile-bar")}>
      <div className={cx("profile-bar-heading")}>
        <span className={cx("profile-bar-title")}>user information</span>
        <Link to="/profile/userId/edit">
          <span className={cx("edit-btn")}>edit profile</span>
        </Link>
      </div>

      <div className={cx("profile-bar-info")}>
        <div className={cx("profile-bar-item")}>
          <span className={cx("profile-info-key")}>Email: </span>
          <span className={cx("profile-info-value")}>nguyenvana@gmail.com</span>
        </div>
        <div className={cx("profile-bar-item")}>
          <span className={cx("profile-info-key")}>Số điện thoại: </span>
          <span className={cx("profile-info-value")}>+84 123 456 789</span>
        </div>
        <div className={cx("profile-bar-item")}>
          <span className={cx("profile-info-key")}>Địa chỉ: </span>
          <span className={cx("profile-info-value")}>Đan Phượng - Hà Nội</span>
        </div>
        <div className={cx("profile-bar-item")}>
          <span className={cx("profile-info-key")}>Quốc tịch: </span>
          <span className={cx("profile-info-value")}>Việt Nam</span>
        </div>
        <div className={cx("profile-bar-item")}>
          <span className={cx("profile-info-key")}>Mối quan hệ: </span>
          <span className={cx("profile-info-value")}>Độc thân</span>
        </div>
      </div>

      <h4 className={cx("profile-bar-close")}>close friend</h4>
      <div className={cx("profile-bar-followings")}>
        <div className={cx("profile-bar-follow")}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXHaQk-PRC64GveR6TG8AnTjw7DZrPkeh87A&usqp=CAU"
            alt=""
            className={cx("follow-img")}
          />
          <span className={cx("follow-name")}>Goku</span>
        </div>
        <div className={cx("profile-bar-follow")}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXHaQk-PRC64GveR6TG8AnTjw7DZrPkeh87A&usqp=CAU"
            alt=""
            className={cx("follow-img")}
          />
          <span className={cx("follow-name")}>Goku</span>
        </div>
        <div className={cx("profile-bar-follow")}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXHaQk-PRC64GveR6TG8AnTjw7DZrPkeh87A&usqp=CAU"
            alt=""
            className={cx("follow-img")}
          />
          <span className={cx("follow-name")}>Goku</span>
        </div>
        <div className={cx("profile-bar-follow")}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXHaQk-PRC64GveR6TG8AnTjw7DZrPkeh87A&usqp=CAU"
            alt=""
            className={cx("follow-img")}
          />
          <span className={cx("follow-name")}>Goku</span>
        </div>
        <div className={cx("profile-bar-follow")}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXHaQk-PRC64GveR6TG8AnTjw7DZrPkeh87A&usqp=CAU"
            alt=""
            className={cx("follow-img")}
          />
          <span className={cx("follow-name")}>Goku</span>
        </div>
        <div className={cx("profile-bar-follow")}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXHaQk-PRC64GveR6TG8AnTjw7DZrPkeh87A&usqp=CAU"
            alt=""
            className={cx("follow-img")}
          />
          <span className={cx("follow-name")}>Goku</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;
