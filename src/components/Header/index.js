import React from "react";
import styles from "./header.module.css";
import Logo from "../../assets/imgs/logo.svg";
import signInIcon from "../../assets/imgs/sign-in-icon.svg";
const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles["header-logo"]} src={Logo} alt="Logo" />
      <button className={styles["sign-in"]}>
        <img className={styles["sign-in-icon"]} src={signInIcon} alt="Sign in Icon" />
        <span>Sign in</span>
      </button>
    </div>
  );
};

export default Header;
