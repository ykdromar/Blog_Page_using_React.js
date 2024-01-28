import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/home.module.css";
import { getAllDocs } from "../config/firebaseFirestore";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const fetchAllPosts = async () => {
    let allPosts = await getAllDocs("blogs");
    setPosts(allPosts);
  };
  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div className={styles.home}>
      <main className={styles.allArticles}></main>
      <aside className={styles.topArticles}></aside>
    </div>
  );
};

export default Home;

// {posts.map((post) => {
//   return (
//     <div className="postItem" key={`post-${post.uid}`}>
//       <div style={{ margin: "15px" }}>
//         <div
//           style={{
//             fontWeight: "700",
//             fontSize: "18px",
//           }}
//         >
//           {post.data.title}
//         </div>
//         <div>
//           {post.data.content.substr(0, 500)}
//           <Link to={`/post/${post.uid}`}>&nbsp;Read More...</Link>
//         </div>
//       </div>
//     </div>
//   );
// })}
