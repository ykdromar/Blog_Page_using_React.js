import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
import "./home.css";
import "./navbar.css";
function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let posts = [];
    getDocs(collection(db, "/blogs")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        let post = {
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
        };
        posts.push(post);
      });
      setPosts(posts);
    });
    // console.log(posts)
  }, []);
  // console.log(posts);

  return (
    <div id="home">
      <h2>My Blogs</h2>
      {posts.map((post, index) => {
        return (
          <div className="post-item" key={`post-${index}`}>
            <div style={{ margin: "15px" }}>
              <div
                style={{
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                {post.title}
              </div>
              <div>
                {post.content.substr(0, 500)}
                <Link
                  className="nav-item-link"
                  to={`/Blog_Page_using_React.js/post/${post.id}`}
                >
                  &nbsp;Read More...
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
