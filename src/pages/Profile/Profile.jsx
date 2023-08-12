import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import Navbar from "~/components/Navbar";
import Sidebar from "~/components/Sidebar";
import Feed from "~/components/Feed";
import RightBar from "~/components/RightBar";

const cx = classNames.bind(styles);

const Profile = () => {
  return (
    <div className={cx("profile")}>
      <Navbar />
      <div className={cx("profile-wrapper")}>
        <Sidebar />
        <div className={cx("profile-right")}>
          <div className={cx("profile-right-top")}>
            <div className={cx("profile-cover")}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrOffCSXBzgF-7uBFw7Jts-E2sjMPQgykHRg&usqp=CAU"
                alt=""
                className={cx("profile-cover-img")}
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NsxAhbCuktuyf_6Raq_cnwidw7dLMiNJnQ&usqp=CAU"
                alt=""
                className={cx("profile-user-img")}
              />
            </div>
            <div className={cx("profile-info")}>
                <h4 className={cx("profile-info-name")}>Anime</h4>
                <span className={cx("profile-info-desc")}>hello friend</span>
            </div>
          </div>
          <div className={cx("profile-right-bottom")}>
            <Feed/>
            <RightBar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
