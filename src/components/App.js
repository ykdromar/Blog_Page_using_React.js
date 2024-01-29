import styles from "../css/app.module.css";
import { useAuth } from "../hooks";
import { Home, CreateEditArticle, ArticlePage, Navbar, Login } from "./index";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  const auth = useAuth();
  return auth.loading ? (
    <></>
  ) : (
    <div className={styles.app}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/article/:articleId" element={<ArticlePage />} />
        <Route
          exact
          path="/edit-478bv7e/:articleId"
          element={
            auth.user ? <CreateEditArticle /> : <Navigate replace to="/" />
          }
        />
        <Route
          exact
          path="/create-478bv7d"
          element={
            auth.user ? <CreateEditArticle /> : <Navigate replace to="/" />
          }
        />
        <Route exact path="/login-478bv7f" element={<Login />} />
        <Route exact path="*" element={<h2>Error 404: Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
