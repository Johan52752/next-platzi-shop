import React, { useContext } from "react";
import styles from "./ShoppingCar.module.css";
import Image from "next/image";
import ShoppingCart from "../../components/shopping-cart/ShoppingCart";
import arrowleft from "../../assets/icons/arrow-left-solid.svg";
import AppContext from "../../context/AppContext";
import Link from "next/link";

const ShoppingCar = ({ handle }) => {
  const { state } = useContext(AppContext);
  return (
    <aside className={styles["shoping-car"]}>
      <div className={styles["shop-desktop"]}>
        <div>
          <Image
            onClick={handle}
            src={arrowleft}
            alt="arrow-left"
          />
        </div>
        <h1>Shoping cart</h1>
      </div>
      <div className={styles["order-grid"]}>
        {state.cart.map((item) => (
          <ShoppingCart key={item.idItem} product={item} />
        ))}
      </div>
      <div className={styles["orders-options"]}>
        <p className={styles["orders-description"]}>
          <span>Total</span>
        </p>
        <p className={styles["orders-price"]}>
          $
          {state.cart.length
            ? state.cart.reduce((a, b) => a + b.price, 0)
            : "0"}
        </p>
      </div>
      <Link href="/myorder">
        <button  className={styles["button-card"]}>
          Checkout
        </button>
      </Link>
    </aside>
  );
};

export default ShoppingCar;
