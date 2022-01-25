import React from "react";
import styles from "./SendEmail.module.css";
import logo from "../../assets/logos/logo_yard_sale.svg"
import Image from "next/image";
const SendEmail = () => {
  return (
    <div className={styles["login"]}>
      <div className={styles["form-container"]}>
        <Image className={styles["logo"]} src={logo} alt="" />
        <h1 className={styles["tittle"]}>Password recovery</h1>
        <p className={styles["description"]}>
          Inform the email address used to create your account
        </p>
        <form className={styles["form" ]}action="">
          <label className={styles["label-input"]} htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            className={`${styles["input"]} ${styles["input-password"]}`}
            type="email"
            placeholder="yo@example.com"
          />
          <input type="submit" className={styles["button-form"]} value="Submit" />
          <a href="">Back to log in</a>
        </form>
      </div>
    </div>
  );
};

export default SendEmail;
