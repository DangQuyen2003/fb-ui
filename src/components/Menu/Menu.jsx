

import classNames from "classnames/bind"
import styles from "./Menu.module.scss"

const cx = classNames.bind(styles)

const Menu = ({Icon, text}) => {
  return (
    <div className={cx("menu")}>
        {Icon}
        <span className={cx("menu-text")}>{text}</span>
        <span className={cx("menu-name")}>
            {text === "Logout" && "(abc)"}
        </span>
    </div>
  )
}

export default Menu