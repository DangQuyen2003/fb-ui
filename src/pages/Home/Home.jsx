

import classNames from "classnames/bind"
import styles from "./Home.module.scss"
import Navbar from "~/components/Navbar"
import Sidebar from "~/components/Sidebar"
import Feed from "~/components/Feed"
import RightBar from "~/components/RightBar"

const cx = classNames.bind(styles)

const Home = () => {
  return (
    <div className={cx("Home")}>
        <Navbar/>
        <div className={cx("home-container")}>
          <Sidebar/>
          <Feed/>
          <RightBar/>
        </div>
    </div>
  )
}

export default Home