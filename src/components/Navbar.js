import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <div id="navbar">
      <ul id="nav-items-list">
        {/* <li>
          <Link className="nav-item-link" to="/blog/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className="nav-item-link"
            to="/blog/create-post"
          >
            CreatePost
          </Link>
        </li> */}
        <li>
          <Link className="nav-item-link" to="/blog/">
            <h1>Blogs</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
