import React from "react";
import styles from "./Search.module.css";
import search from "../../assets/icons/search-solid.svg";
import chevron from "../../assets/icons/chevron-down-solid.svg";
import Image from "next/image";

const Search = () => {
  return (
    <div className={styles.search}>
      <div className={`${styles.input} ${styles["search-product"]}`}>
        <div className={styles["search-img"]}>
          <Image src={search} alt="search" />
        </div>
        <input className={styles.input} type="text" placeholder="Buscar un producto" />
      </div>
      <ul className={styles["product-filter"]}>
        <li>All</li>
        <li>Clothes</li>
        <li>Electronics</li>
        <li>Furniture</li>
        <li>Toys</li>
        <li>Others</li>
      </ul>
      <div className={styles["select-filter"]}>
        <span>Order: </span>
        <select name="select">
          <option value="most-recent">Most recent</option>
        </select>
        <Image width={"10px"} height={"10px"} src={chevron} alt="" />
      </div>
    </div>
  );
};

export default Search;
