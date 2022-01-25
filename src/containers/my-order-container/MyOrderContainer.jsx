import React, { useContext } from "react";
import styles from "./MyOrderContainer.module.css";
import Order from "../../components/order/Order";
import ShoppingCart from "../../components/shopping-cart/ShoppingCart";
import AppContext from "../../context/AppContext";

const MyOrderContainer = () => {
  const { state } = useContext(AppContext);
  const date=new Date();
  console.log(state)
  return (
    <div className={styles["my-order-container"]}>
      <h1>My order</h1>
      <div className={styles["my-order-content"]}>
        <Order orderDate={`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`} numberOfArticles={state?.cart.length} orderPrice={`$ ${state?.cart.length
            ? state.cart.reduce((a, b) => a + b.price, 0)
            : "0"}`} />
        <div className={styles["my-order-items"]}>
          {state?.cart.map((product) => {
            return (
              <ShoppingCart
                product={product}
                key={product.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyOrderContainer;
