import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faMessage,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);

const Navbar = () => {
  return (
    <div className={cx("navbar-container")}>
      {/* ------------------------------------ */}

      <div className={cx("navbar-left")}>
        <span className={cx("logo")}>Facebook</span>
      </div>

      {/* ------------------------------------ */}

      <div className={cx("navbar-center")}>
        <div className={cx("search")}>
          <FontAwesomeIcon
            className={cx("search-icon")}
            icon={faMagnifyingGlass}
          />
          <input
            type="text"
            placeholder="Tìm kiếm"
            className={cx("search-input")}
          />
        </div>
      </div>

      {/* ------------------------------------ */}

      <div className={cx("navbar-right")}>
        <div className={cx("links")}>
          <span className={cx("nav-link")}>Home Page</span>
          <span className={cx("nav-link")}>Time line</span>
        </div>
        <div className={cx("navbar-icons")}>
          <div className={cx("navbar-icon-item")}>
            <FontAwesomeIcon icon={faUser} />
            <span className={cx("badge")}>2</span>
          </div>

          <div className={cx("navbar-icon-item")}>
            <FontAwesomeIcon icon={faMessage} />
            <span className={cx("badge")}>2</span>
          </div>

          <div className={cx("navbar-icon-item")}>
            <FontAwesomeIcon icon={faBell} />
            <span className={cx("badge")}>2</span>
          </div>
        </div>
        <img
          src="https://hinhnen4k.com/wp-content/uploads/2023/04/gai-xinh-bikini-5.jpg"
          alt=""
          className={cx("image")}
        />
      </div>
    </div>
  );
};

export default Navbar;
