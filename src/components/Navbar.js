import styles from "../css/navbar.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks";
const Navbar = () => {
  const auth = useAuth();
  return (
    <nav className={styles.navbar}>
      <Link className={styles.left} to="/">
        Yash K. Dromar
      </Link>
      <div className={styles.right}>
        {auth.user && (
          <button className={styles.signBtn} onClick={auth.logout}>
            Log out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
