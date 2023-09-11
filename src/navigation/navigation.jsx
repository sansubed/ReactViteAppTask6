import styles from "./navigation.module.css";
function Navigation() {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navlist}>
          <li className={styles.navItem}>
            {" "}
            <a href="https://www.google.com">Home </a>
          </li>
          <li className={styles.navItem}>
            <a href="https://www.google.com">About </a>
          </li>
          <li className={styles.navItem}>
            <a href="https://www.google.com">Contact </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
