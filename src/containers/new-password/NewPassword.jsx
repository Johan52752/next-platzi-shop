import React from "react";
import styles from "./NewPassword.module.css";
import logo from "../../assets/logos/logo_yard_sale.svg"
import Image from "next/image";

const NewPassword = () => {
    return(
        <div className={styles["NewPassword"]}>
            <div className={styles["form-container"]}>
            <Image src={logo} alt="logo" className={styles["logo-password"]} />
            <h1 className={styles["title"]}>Create a new password</h1>
            <p className={styles["subtitle"]}>Enter a new passwrd for yue account</p>
            <form action="/" className={styles["form"]}>
                <label htmlFor="password" className={styles["label"]}>Password</label>
                <input type="password" id="password" placeholder="*********" className={`${styles["input"]} ${styles["input-password"]}`} />

                <label htmlFor="new-password" className={styles["label"]}>Password</label>
                <input type="password" id="new-password" placeholder="*********" className={`${styles["input"]} ${styles["input-password"]}`} />

                <input type="submit" value="Confirm" className={`${styles["primary-button"]} ${styles["login-button"]}`} />
            </form>
            </div>
        </div>
    );
}

export default NewPassword;