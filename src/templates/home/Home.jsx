import React from "react";
import Header from "../../components/header/Header";
import MenuDesktop from "../../components/menu-desktop/MenuDesktop";
import MenuMobile from "../../components/menu-mobile/MenuMobile";
import Search from "../../components/search/Search";
import ProductsContainer from "../../containers/products-container/ProductsContainer";
import ShoppingCar from "../../containers/shopping-car/ShoppingCar";
import AsideCard from "../../containers/aside-card/AsideCard";
import styles from './Home.module.css'

const Home = () => {
    return(
        <div className={styles["Home"]}>
            {/* <MenuDesktop /> */}
            {/* <MenuMobile /> */}
            {/* <ShoppingCar /> */}
            {/* <AsideCard /> */}
            <section className={styles["section-products"]}>
                <Search />
                <ProductsContainer />
            </section>
        </div>
    );
}
export default Home;