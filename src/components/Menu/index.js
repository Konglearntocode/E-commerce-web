import React from 'react'
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div>
      <ul className={styles["nav"]}>
        <li className={styles["nav-item"]}><a href="#" className="nav-item-link">Fresh</a></li>
        <li className={styles["nav-item"]}><a href="#" className="nav-item-link">Today’s Deals</a></li>
        <li className={styles["nav-item"]}><a href="#" className="nav-item-link">Mobiles</a></li>
        <li className={styles["nav-item"]}><a href="#" className="nav-item-link">Gift Cards</a></li>
        <li className={styles["nav-item"]}><a href="#" className="nav-item-link">Women Clothing</a></li>
        <li className={styles["nav-item"]}><a href="#" className="nav-item-link">Men Clothing</a></li>
        <li className={styles["nav-item"]}><a href="#" className="nav-item-link">Kids Clothing</a></li>
        <li className={styles["nav-item"]}><a href="#" className="nav-item-link">Health</a></li>
        <li className={styles["nav-item"]}><a href="#" className="nav-item-link">Pet corner</a></li>
        <li className={styles["nav-item"]}><a href="#" className="nav-item-link">Books</a></li>
        <li className={styles["nav-item"]}><a href="#" className="nav-item-link">Beauty</a></li>
        <li className={styles["nav-item"]}><a href="#" className="nav-item-link">Kitchen</a></li>
        <li className={styles["nav-item"]}><a href="#" className="nav-item-link">Bed Room</a></li>
        <li className={styles["nav-item"]}><a href="#" className="nav-item-link">Sport</a></li>
        <li className={styles["nav-item"]}><a href="#" className="nav-item-link">Bags</a></li>
      </ul>
    </div>
  )
}

export default Menu