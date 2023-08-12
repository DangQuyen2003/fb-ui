import classNames from "classnames/bind";
import styles from "./FriendsOnline.module.scss";

const cx = classNames.bind(styles);

const FriendsOnline = ({onlineUser}) => {
  return (
    <div className={cx("friend-online")}>
      <li className={cx("list-friend")}>
        <div className={cx("profile-img-container")}>
          <img src={onlineUser.profilePicture} alt="" className={cx("profile-img")} />
          <span className={cx("online")}></span>
        </div>
        <span className={cx("user-name")}>{onlineUser.username}</span>
      </li>
    </div>
  );
};

export default FriendsOnline;
