import { getDoc, doc } from "firebase/firestore";
import db from "../firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./post.css";

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  useEffect(() => {
    getDoc(doc(db, "/blogs", postId)).then((snapshot) => {
      setPost(snapshot.data());
    });
  });
  return (
    <div id="container">
      <div className="post">
        <div className="title">{post.title}</div>
        <img className="header-img" alt="header-img" src={post.header}></img>
        <div className="content">{post.content}</div>
      </div>
    </div>
  );
}

export default PostDetail;
