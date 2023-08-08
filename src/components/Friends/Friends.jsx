import classNames from "classnames/bind";
import styles from "./Friends.module.scss";

const cx = classNames.bind(styles);

const Friends = ({user}) => {
  return (
    <div className={cx("")}>
        
      <li className={cx("friend")}>
        <img
          src={user.profilePicture}
          alt=""
          className={cx("friend-img")}
        />
        <span className={cx("friend-name")}>{user.username}</span>
      </li>
      
    </div>
  );
};

export default Friends;
