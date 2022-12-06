import React from "react";
import SearchBar from "./SearchBar";
import styles from "./sub-header.module.css";

const SubHeader = () => {
  console.log("subheaderstyle", styles);
  return (
    <div className="flex">
      <div className={styles["box-left"]}>
        <div className={styles["address-box"]}>Delhi, 110110</div>
      </div>
      <SearchBar />
    </div>
  );
};

export default SubHeader;
