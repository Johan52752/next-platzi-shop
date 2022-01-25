import React from "react";
import styles from "./Order.module.css";
import flechita from "../../assets/icons/flechita.svg"
import Image from "next/image";

const Order = ({orderDate, numberOfArticles, orderPrice}) => {
  return (
    <div className={styles["order"]}>
      <p>
        <span>{orderDate}</span>
        <span>{numberOfArticles}</span>
      </p>
      <p>{orderPrice}</p>
      <Image src={flechita} alt="arrow" />
    </div>
  );
};

export default Order;
