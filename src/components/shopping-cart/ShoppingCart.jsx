import React, { useContext } from "react";
import styles from "./ShoppingCart.module.css";
import AppContext from "../../context/AppContext";
import close from "../../assets/icons/icon_close.png"
import Image from "next/image";

const ShoppingCart = ({product}) => {
  const {removeFromCart} = useContext(AppContext);
  return (
    <div className={styles["shopping-cart"]}>
      <figure>
        <img
          src={product?.images[0]}
          alt={product?.title}
          className={styles["shopping-img"]}
        />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <div className={styles["shopping-close"]}>
      <Image onClick={()=>{removeFromCart(product)}} src={close} alt="close" /> 
      </div>
    </div>
  );
};

export default ShoppingCart;
