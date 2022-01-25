import React, { useRef } from "react";
import styles from "./Login.module.css"
import logo from "../../assets/logos/logo_yard_sale.svg";
import Image from "next/image";

const Login = () => {
    const form = useRef(null);
    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }
    return(
        <div className={styles["login"]}>
            <div className={styles["form-container"]}>
                <Image src={logo} alt="logo" className={styles["logo-login"]} />
                <form action="/" className={styles["form"]} ref={form}>
                    <label htmlFor="email" className={styles["label"]}>Email address</label>
                    <input type="text" name="email" placeholder="platzi@example.cm" className={styles["input input-email"]} />
                    <label htmlFor="password" className={styles["label"]}>Password</label>
                    <input type="password" name="password" placeholder="*********" className={styles["input input-password"]} />
                    <input type="submit" value="Log in" className={styles["primary-button login-button"]} onClick={handleSubmit} />
                    <a href="/">Forgot my password</a>
                </form>
                <button className={styles["secondary-button signup-button"]}>Sign up</button>
            </div>
        </div>
    );
}

export default Login;