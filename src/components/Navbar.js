import {Link} from 'react-router-dom';
import './navbar.css';
function Navbar() {
  return (
    <div id="navbar">
    <ul id='nav-items-list'>
<li><Link className='nav-item-link' to='/'>Home</Link></li>
<li><Link className='nav-item-link' to='/create-post'>CreatePost</Link></li>
    </ul>
    </div>
  );
}

export default Navbar;
