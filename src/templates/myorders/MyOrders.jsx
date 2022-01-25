import React from "react";
import MyOrdersContainer from "../../containers/my-orders-container/MyOrdersContainer";
import styles from "./MyOrders.module.css";

const MyOrders = () => {
    return(
    <div className={styles["my-order"]}>
        <MyOrdersContainer />
    </div>
    );
}

export default MyOrders;