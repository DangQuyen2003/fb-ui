import classNames from "classnames/bind";
import styles from "./Share.module.scss";
import { EmojiEmotions, PermMedia, VideoCameraBack } from "@mui/icons-material";

const cx = classNames.bind(styles);

const Share = () => {
  return (
    <div className={cx("share")}>
      <div className={cx("share-wrapper")}>
        <div className={cx("share-top")}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczUELqqO2OC2Tb9lqyimg4zXviR9s32Nlgw&usqp=CAU"
            alt=""
            className={cx("share-img")}
          />
          <input
            type="text"
            placeholder="Hôm nay bạn cảm thấy thế nào ?"
            className={cx("share-input")}
          />
        </div>
        <hr className={cx("hr")} />
        <div className={cx("share-bottom")}>
          <div className={cx("share-options")}>
            <div className={cx("share-option")}>
              <VideoCameraBack
                className={cx("share-icon")}
                style={{ color: "#bb0000f2" }}
              />
              <span className={cx("share-option-text")}>Live Video</span>
            </div>
            <div className={cx("share-option")}>
              <PermMedia
                className={cx("share-icon")}
                style={{ color: "#2e0196f1" }}
              />
              <span className={cx("share-option-text")}>Photo/Video</span>
            </div>
            <div className={cx("share-option")}>
              <EmojiEmotions
                className={cx("share-icon")}
                style={{ color: "#bfc600ec" }}
              />
              <span className={cx("share-option-text")}>Feeling/Activity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
