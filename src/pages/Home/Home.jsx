

import classNames from "classnames/bind"
import styles from "./Home.module.scss"
import Navbar from "~/components/Navbar"

const cx = classNames.bind(styles)

const Home = () => {
  return (
    <div className={cx("Home")}>
        <Navbar/>
    </div>
  )
}

export default Home