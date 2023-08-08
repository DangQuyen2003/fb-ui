

import classNames from "classnames/bind"
import styles from "./Stories.module.scss"

const cx = classNames.bind(styles)

const Stories = () => {
  return (
    <div className={cx("stories")}>
      <div className={cx("story-card")}>
        <img src="" alt="" className="story-profile" />
        <img src="" alt="" className="story-background" />
        <img src="" alt="" className="story-add" />
        <span className={cx("text")}></span>
      </div>
    </div>
  )
}

export default Stories