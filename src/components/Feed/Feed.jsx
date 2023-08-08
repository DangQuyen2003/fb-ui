

import classNames from "classnames/bind"
import styles from "./Feed.module.scss"
import Stories from "../Stories"

const cx = classNames.bind(styles)

const Feed = () => {
  return (
    <div className={cx("feed")}>
      <div className="feed-wrapper">
        <Stories/>
      </div>
    </div>
  )
}

export default Feed