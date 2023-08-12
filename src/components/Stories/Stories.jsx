import classNames from "classnames/bind";
import styles from "./Stories.module.scss";
import StoryCard from "../StoryCard";
import { Users } from "~/data";

const cx = classNames.bind(styles);

const Stories = () => {
  return (
    <div className={cx("stories")}>
      <div className={cx("story-card")}>
        <div className={cx("overlay")}></div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4YAo3C_QcgCLbDCv2w6EjQKJxMCoonUt72w&usqp=CAU"
          alt=""
          className={cx("story-profile")}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETbvF4QqtkmVjN7m_Ao7IU6EqoC1ZEsBfBQ&usqp=CAU"
          alt=""
          className={cx("story-background")}
        />
        <img
          src="./assets/img/upload.png"
          alt=""
          className={cx("story-add")}
        />
        <span className={cx("text")}>anime</span>
      </div>
      {Users.map((u) => (
        <StoryCard key={u.id} user={u} />
      ))}
    </div>
  );
};

export default Stories;
