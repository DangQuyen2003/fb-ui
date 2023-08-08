

import classNames from "classnames/bind"
import styles from "./RightBar.module.scss"

const cx = classNames.bind(styles)

const RightBar = () => {
  return (
    <div className={cx("right-bar")}>RightBar</div>
  )
}

export default RightBar