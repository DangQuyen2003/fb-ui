import classNames from "classnames/bind";
import styles from "./RightBarHome.module.scss";
import FriendsOnline from "../FriendsOnline";
import { Users } from "~/data";

const cx = classNames.bind(styles);

const RightBarHome = () => {
  return (
    <div className={cx("right-bar-home")}>
      <div className={cx("birthday-container")}>
        <img src="/assets/img/gift.png" alt="" className={cx("birthday-img")} />
        <span className={cx("birthday-text")}>
          <b>chúc mừng</b> <b>sinh nhật</b>{" "}
        </span>
      </div>
      <img
        src="/assets/img/adv.jpg"
        alt=""
        className={cx("right-bar-advert")}
      />

      <span className={cx("right-bar-title")}>Online friends</span>

      <ul className={cx("right-bar-list-friends")}>
        {Users.map((u) => (
          <FriendsOnline key={u.id} onlineUser={u} />
        ))}
      </ul>
    </div>
  );
};

export default RightBarHome;
