

import classNames from "classnames/bind"
import styles from "./RightBar.module.scss"
import RightBarHome from "../RightBarHome"
import ProfileBar from "../ProfileBar"

const cx = classNames.bind(styles)

const RightBar = ({profile}) => {
  return (
    <div className={cx("right-bar")}>
      <div className={cx("right-bar-wrapper")}>
        { profile ? <ProfileBar/> : <RightBarHome/>}
      </div>
    </div>
  )
}

export default RightBar