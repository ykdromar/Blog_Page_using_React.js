import styles from "../css/app.module.css";
import { Home, CreateEditArticle, PostDetail, Navbar } from "./index";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/article/:articleId" element={<PostDetail />} />
        <Route
          exact
          path="/edit-478bv7e/:articleId"
          element={<CreateEditArticle />}
        />
        <Route exact path="/create-478bv7d" element={<CreateEditArticle />} />
      </Routes>
    </div>
  );
}

export default App;
