import React from "react";
import MyOrderContainer from "../containers/my-order-container/MyOrderContainer";
import styles from "../styles/MyOrder.module.css";
import Head from "next/head";

const MyOrder = () => {
  return (
    <>
      <Head>
          <title>MyOrder</title>
      </Head>
      <div className={styles["my-order"]}>
        <MyOrderContainer />
      </div>
    </>
  );
};

export default MyOrder;
