import {
  Bookmark,
  Brightness4,
  Chat,
  Event,
  ExitToApp,
  Group,
  RssFeed,
  ShoppingCart,
  VideoCameraBack,
} from "@mui/icons-material";
// import { useColorScheme } from "@mui/material";


import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Menu from "../Menu";
import Friends from "../Friends";
import { Users } from "~/data";

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <div className={cx("side-bar")}>
      <div className={cx("side-bar-wrapper")}>
        <Menu Icon={<RssFeed />} text="feed" />
        <Menu Icon={<Chat />} text="chats" />
        <Menu Icon={<VideoCameraBack />} text="videos" />
        <Menu Icon={<Group />} text="Friends" />
        <Menu Icon={<Bookmark />} text="Bookmarks" />
        <Menu Icon={<ShoppingCart />} text="Marketplace" />
        <Menu Icon={<Event />} text="Events" />
        <Menu Icon={<Brightness4 />} text="Them" />
        <Menu Icon={<ExitToApp />} text="Logout" />

        <button className={cx("more-btn")}>Show More</button>
        <hr className={cx("hr")} />

        <ul className={cx("friends-list")}>

          {Users.map(u => (
            <Friends key={u.id} user={u} />

          ))}

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
