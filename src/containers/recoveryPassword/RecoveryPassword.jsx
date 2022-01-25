import React from "react";
import styles from "./RecoveryPassword.module.css"
import logo from "../../assets/logos/logo_yard_sale.svg"
import email from "../../assets/icons/email.svg"
import Image from "next/image";

const RecoveryPassword = () => {
  return (
    <div className={styles["login"]}>
      <div className={styles["form-container"]}>
        <Image src={logo} alt="logo-recovery" className={styles["logo"]} />
        <h1 className={styles["title"]}>Email has been sent!</h1>
        <p className={styles["subtitle"]}>
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className={styles["email-image"]}>
          <Image src={email} alt="email" />
        </div>
        <button className={styles["login-button"]}>Login</button>
        <p className={styles["resend"]}>
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default RecoveryPassword;
