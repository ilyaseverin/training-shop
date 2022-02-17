import React from "react";
import styles from "./header.module.css";
import Phone from "./images/phone.svg";
import Location from "./images/location.svg";
import Clock from "./images/clock.svg";
import Facebook from "./images/facebook.svg";
import Instagram from "./images/instagram.svg";
import Twitter from "./images/twitter.svg";
import Pinterest from "./images/pinterest.svg";
import Search from "./images/search.svg";
import Network from "./images/network.svg";
import Vector from "./images/vector.svg";
import Circle from "./images/circle.svg";
import ellipse from "./images/ellipse.svg";
import Two from "./images/two.svg";
import Basket from "./images/basket.svg";
import ClerverShop from "./images/cleverShop.svg";

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topWrapper}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div>
              <img src={Phone} alt="phone" />
              <span>+375 29 100 20 30</span>
            </div>
            <div>
              <img src={Location} alt="location" />
              <span>Belarus, Gomel, Lange 17</span>
            </div>
            <div>
              <img src={Clock} alt="clock" />
              <span>All week 24/7</span>
            </div>
          </div>
          <div className={styles.right}>
            <img src={Facebook} alt="phone" />

            <img src={Instagram} alt="phone" />

            <img src={Twitter} alt="phone" />

            <img src={Pinterest} alt="phone" />
          </div>
        </div>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.bottom}>
          <div className={styles.logo}>
            <img src={ClerverShop} alt="phone" />
          </div>
          <div className={styles.menu}>
            <span>About Us</span>

            <span>Women</span>

            <span>Man</span>

            <span>Beauty</span>

            <span>Accessories</span>

            <span>Blog</span>

            <span>Contact</span>
          </div>
          <div className={styles.images}>
            <img src={Search} alt="phone" />

            <img src={Network} alt="phone" />

            <img src={Vector} alt="phone" />

            <img src={Basket} alt="phone" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
