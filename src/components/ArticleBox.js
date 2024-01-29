import styles from "../css/articleBox.module.css";
import { Link } from "react-router-dom";
const ArticleBox = ({ article }) => {
  console.log(article);
  if (article.data.contents[0] == null) {
    return <></>;
  }
  return (
    <article className={styles.articleBox}>
      <Link className={styles.articleTitle} to={`/article/${article.uid}`}>
        {article.data.contents[0] != null
          ? article.data.contents[0].data
          : null}
      </Link>
      <p className={styles.articleDesc}>
        {article.data.contents[1] != null ? article.data.contents[1].data : ""}
      </p>
    </article>
  );
};

export default ArticleBox;
