import "./App.css";
// import {Home,CreatePost,PostDetail,Navbar} from './index';
import Navbar from "./Navbar";
import Home from "./Home";
import CreatePost from "./CreatePost";
import PostDetail from "./PostDetail";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/Blog_Page_using_React.js/" element={<Home />} />
        <Route
          exact
          path="/Blog_Page_using_React.js/post/:postId"
          element={<PostDetail />}
        />
        <Route
          exact
          path="/Blog_Page_using_React.js/create-post"
          element={<CreatePost />}
        />
      </Routes>
    </div>
  );
}

export default App;
