import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/home.module.css";
import { getAllDocs } from "../config/firebaseFirestore";
import { ArticleBox, GoogleAd } from "./";
const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchAllArticles = async () => {
    setLoading(true);
    try {
      let allArticles = await getAllDocs("articles");
      setArticles(allArticles);
      setLoading(false);
    } catch (e) {}
  };
  useEffect(() => {
    fetchAllArticles();
  }, []);

  return loading ? (
    <></>
  ) : (
    <div className={styles.home}>
      <main className={styles.allArticles}>
        {articles.map((article) => {
          return <ArticleBox key={article.uid} article={article} />;
        })}
      </main>
      <aside className={styles.topArticles}>
        <GoogleAd slot={"3117310821"} />
      </aside>
    </div>
  );
};

export default Home;
