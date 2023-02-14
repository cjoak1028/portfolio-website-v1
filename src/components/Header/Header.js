import React, { useState } from "react";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={`${styles.header} padding-x flex flex-jc-sb flex-ai-c`}>
      <p
        initial={{ opacity: 0 }}
        className={`${styles.logo} ${openMenu ? "white" : ""}`}
      >
        CJ PORTFOLIO
      </p>
      <Navigation />
      <p className={styles.email}>changju.kim10@gmail.com</p>
      <button
        className={`${styles["hamburger-button"]} ${openMenu ? "white" : ""}`}
        onClick={toggleMenu}
      >
        {openMenu ? "close" : "menu"}
      </button>
      {openMenu ? <HamburgerMenu /> : ""}
    </div>
  );
};

export default Header;
