import React from "react";
import MyOrderContainer from "../../containers/my-order-container/MyOrderContainer";
import styles from "./MyOrder.module.css";

const MyOrder = () => {
    return(
    <div className={styles["my-order"]}>
        <MyOrderContainer />
    </div>
    );
}

export default MyOrder;