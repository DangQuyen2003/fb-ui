import classNames from "classnames/bind";
import style from "./Post.module.scss";
import { Users } from "~/data";
import { IconButton } from "@mui/material";
import { Favorite, MoreVert, ThumbUp, ThumbUpAltOutlined } from "@mui/icons-material";

const cx = classNames.bind(style);

const Post = ({ post }) => {
  return (
    <div className={cx("post")}>
      <div className={cx("post-wrapper")}>
        <div className={cx("post-top")}>
          <div className={cx("post-top-left")}>
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className={cx("post-img")}
            />
            <span className={cx("post-user-name")}>
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className={cx("post-date")}>{post.date}</span>
          </div>
          <div className={cx("post-top-right")}>
            <IconButton>
              <MoreVert className={cx("more-btn")} />
            </IconButton>
          </div>
        </div>
        <div className={cx("post-center")}>
          <span className={cx("post-text")}>{post.body}</span>
          <img src={post.photo} alt="" className="center-img" />
        </div>
        <div className={cx("post-bottom")}>
          <div className={cx("bottom-left")}>
            <Favorite className={cx("bottom-left-icon")} style={{color:"red"}} />
            <ThumbUp className={cx("bottom-left-icon")} style={{color:"#011631"}} />
            <span className={cx("bottom-like-counter")}>{post.like}</span>
          </div>
          <div className={cx("bottom-right")}>
            <span className={cx("comment-text")}>{post.comment} . comments . share</span>
          </div>
        </div>

        <hr className={cx("hr")}/>

        <div className="post-footers">
            <div className={cx("footer-item")}>
                <ThumbUpAltOutlined className={cx("footer-icon")} />
                <span className={cx("footer-text")}>Like</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Post;
