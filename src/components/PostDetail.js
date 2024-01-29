import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/post.module.css";
import { getSingleDoc } from "../config/firebaseFirestore";

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  const getPost = async () => {
    let rawPost = await getSingleDoc("articles", postId);
    setPost(rawPost);
  };
  useEffect(() => {
    getPost();
  });
  return (
    <div className="">
      <div className="post">
        <div className={styles.title}>{post.title}</div>
        {/* <img className="header-img" alt="header-img" src={post.header}></img> */}
        <div className="content">{post.content}</div>
      </div>
    </div>
  );
}

export default PostDetail;
