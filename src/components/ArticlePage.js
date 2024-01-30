import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/articlePage.module.css";
import { getSingleDoc } from "../config/firebaseFirestore";
import { GoogleAd } from "./";
import { FaEdit } from "react-icons/fa";
import { useAuth } from "../hooks";
import { Link } from "react-router-dom";
function ArticlePage() {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const { articleId } = useParams();
  const auth = useAuth();
  const getArticle = async () => {
    setLoading(true);
    try {
      let rawArticle = await getSingleDoc("articles", articleId);
      setArticle(rawArticle);
      setLoading(false);
    } catch (e) {}
  };
  useEffect(() => {
    getArticle();
  }, []);
  return loading ? (
    <></>
  ) : (
    <div className={styles.articlePage}>
      <article className={styles.article}>
        {auth.user && (
          <div className={styles.actions}>
            <Link className={styles.editIcon} to={`/edit/${articleId}`}>
              <FaEdit size={20} />
            </Link>
          </div>
        )}
        {article.contents.map((content) => {
          switch (content.type) {
            case "paragraph":
              return <Paragraph content={content} />;
            case "heading":
              return <Heading content={content} />;
            default:
              return <></>;
          }
        })}
      </article>
      <aside className={styles.similarArticles}>
        <GoogleAd slot={"2378944225"} />
      </aside>
    </div>
  );
}

export default ArticlePage;

const Paragraph = ({ content }) => {
  return <p className={styles.articlePara}>{content.data}</p>;
};

const Heading = ({ content }) => {
  const fontSize = () => {
    switch (content.size) {
      case 1:
        return { fontSize: "2em" };
      case 2:
        return { fontSize: "1.8em" };
      case 3:
        return { fontSize: "1.6em" };
      case 4:
        return { fontSize: "1.4em" };
      case 5:
        return { fontSize: "1.2em" };
      case 6:
        return { fontSize: "1em" };
      default:
        return { fontSize: "0.9em" };
    }
  };
  return (
    <p style={fontSize()} className={styles.articleHeading}>
      {content.data}
    </p>
  );
};
