import styles from "../css/navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>Yash K. Dromar</div>
      <div className={styles.right}></div>
    </nav>
  );
};

export default Navbar;
