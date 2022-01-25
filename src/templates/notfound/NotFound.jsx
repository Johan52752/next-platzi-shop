import React from "react";
import styles from './NotFound.module.css';
import Image from "next/image";

const NotFound = () =>{
    return(
        <div className={styles["NotFound"]}>
            <div>
                <h1>Whoops, thats page not found</h1>
                <p>It looks like that page doesnt exist - Please check the url and try again</p>
                <button className={styles["primary-button"]}>Go back</button>
            </div>
            <Image src="https://image.freepik.com/vector-gratis/error-404-persona-que-busca-ilustracion-concepto_114360-7932.jpg" alt="" />
        </div>
    );
}
export default NotFound;