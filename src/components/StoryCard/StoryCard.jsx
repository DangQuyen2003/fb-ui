

import classNames from "classnames/bind"
import styles from "./StoryCard.module.scss"

const cx = classNames.bind(styles)

const StoryCard = ({user}) => {
  return (
    <div className={cx("story-card")}>
        <div className={cx("overlay")}></div>
        <img
          src={user.profilePicture}
          alt=""
          className={cx("story-profile")}
        />
        <img
          src={user.profilePicture}
          alt=""
          className={cx("story-background")}
        />
        <span className={cx("text")}>{user.username}</span>
    </div>
  )
}

export default StoryCard