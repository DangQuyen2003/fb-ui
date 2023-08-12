import classNames from "classnames/bind";
import styles from "./EditProfile.module.scss";
import Navbar from "~/components/Navbar";
import Sidebar from "~/components/Sidebar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

const cx = classNames.bind(styles);

const EditProfile = () => {
  return (
    <div className={cx("edit-profile")}>
      <Navbar />
      <div className={cx("edit-profile-wrapper")}>
        <Sidebar />
        <div className={cx("profile-right")}>
          <div className={cx("profile-right-top")}>
            <div className={cx("profile-cover")}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrOffCSXBzgF-7uBFw7Jts-E2sjMPQgykHRg&usqp=CAU"
                alt=""
                className={cx("profile-cover-img")}
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NsxAhbCuktuyf_6Raq_cnwidw7dLMiNJnQ&usqp=CAU"
                alt=""
                className={cx("profile-user-img")}
              />
            </div>
            <div className={cx("profile-info")}>
              <h4 className={cx("profile-info-name")}>Anime</h4>
              <span className={cx("profile-info-desc")}>hello friend</span>
            </div>
          </div>
          <div className={cx("edit-profile-bottom")}>
            <div className={cx("edit-top")}>
              <h1>Edit User Profile</h1>
            </div>
            <div className={cx("edit-bottom")}>
              <div className={cx("img")}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIU8Q2GCW_-bcKDZNHYgEYtyDbpCu4cCNSQ&usqp=CAU"
                  alt=""
                />
              </div>
              <div className={cx("information")}>
                <form>
                  <div className={cx("form-input")}>
                    <label htmlFor="file">
                      Image: <DriveFolderUploadOutlined className={cx("icon")} />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <div className={cx("form-input")}>
                    <label>Name</label>
                    <input type="text" placeholder="Đăng Xuân Quyền" />
                  </div>
                  <div className={cx("form-input")}>
                    <label>UserName</label>
                    <input type="text" placeholder="dx_quyen" />
                  </div>
                  <div className={cx("form-input")}>
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="dangxuanquyen1923@gmail.com"
                    />
                  </div>
                  <div className={cx("form-input")}>
                    <label>Số điện thoại</label>
                    <input type="text" placeholder="+84 389 883957" />
                  </div>
                  <div className={cx("form-input")}>
                    <label>Địa chỉ</label>
                    <input type="text" placeholder="Đan Phượng - Hà Nội" />
                  </div>
                  <div className={cx("form-input")}>
                    <label>Quốc tịch</label>
                    <input type="text" placeholder="Việt Nam" />
                  </div>
                  <button type="submit" className={cx("update-btn")}>
                    Update Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
