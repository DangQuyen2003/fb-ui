

import classNames from "classnames/bind"
import styles from "./Feed.module.scss"
import Stories from "../Stories"
import Share from "../Share"
import Post from "../Post"
import { Posts } from "~/data"

const cx = classNames.bind(styles)

const Feed = () => {
  return (
    <div className={cx("feed")}>
      <div className="feed-wrapper">
        <Stories/>
        <Share/>
        {Posts.map((p) => (
          <Post key={p.id} post={p} />

        ))}
      </div>
    </div>
  )
}

export default Feed