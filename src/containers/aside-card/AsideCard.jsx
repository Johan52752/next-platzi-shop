import React from "react";
import styles from "./AsideCard.module.css";
import close from "../../assets/icons/icon_close.png"
import addtocart from "../../assets/icons/bt_add_to_cart.svg";
import Image from "next/image";

const AsideCard = () => {
  return (
    <aside className={styles["product-view"]}>
      <div className={styles["product-card-close"]}>
        <Image src={close} alt="close" />
      </div>
      <Image
        src="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="img-product"
      />

      <div className={styles["product-detail"]}>
        <div>
          <p>$500,00</p>
          <p>Car</p>
          <p>
            With its functional and practical design, this bike also fulfills a
            decorative function, adding personality and a retro-vintage
            aesthetic to your house
          </p>
        </div>
        <button className={styles["button-card"]}>
          <Image src={addtocart} alt="" />
          Add to cart
        </button>
      </div>
    </aside>
  );
};

export default AsideCard;
