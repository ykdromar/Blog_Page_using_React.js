import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/home.module.css";
import { getAllDocs } from "../config/firebaseFirestore";
import { ArticleBox } from "./";
const Home = () => {
  const [articles, setArticles] = useState([]);
  const fetchAllArticles = async () => {
    let allArticles = await getAllDocs("articles");
    setArticles(allArticles);
  };
  useEffect(() => {
    fetchAllArticles();
  }, []);

  return (
    <div className={styles.home}>
      <main className={styles.allArticles}>
        {articles.map((article) => {
          return <ArticleBox key={article.uid} article={article} />;
        })}
      </main>
      <aside className={styles.topArticles}></aside>
    </div>
  );
};

export default Home;
