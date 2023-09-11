import styles from "./header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            src="https://www.liblogo.com/img-logo/ma7809f3d2-marketplace-logo-facebook-marketplace-for-dealers-digital-air-strike.png"
            className={styles.image}
          />
        </div>
        <h1 className={styles.title}> Global MarketHub</h1>
      </header>
    </>
  );
}

export default Header;
