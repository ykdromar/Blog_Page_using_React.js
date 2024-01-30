import styles from "../css/articleBox.module.css";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useAuth } from "../hooks";
const ArticleBox = ({ article }) => {
  const auth = useAuth();
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
      <div className={styles.actions}>
        {auth.user && (
          <Link className={styles.editIcon} to={`/edit/${article.uid}`}>
            <FaEdit size={20} />
          </Link>
        )}
      </div>
    </article>
  );
};

export default ArticleBox;
