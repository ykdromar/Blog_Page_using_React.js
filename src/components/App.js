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
        <Route exact path="/blog/" element={<Home />} />
        <Route exact path="/blog/post/:postId" element={<PostDetail />} />
        <Route exact path="/blog/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
