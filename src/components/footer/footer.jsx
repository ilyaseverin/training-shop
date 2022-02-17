import React from "react";
import styles from "./footer.module.css";

import Facebook from "./images/facebook.svg";
import Instagram from "./images/instagram.svg";
import Twitter from "./images/twitter.svg";
import Pinterest from "./images/pinterest.svg";

import Phone from "./images/phone.svg";
import Location from "./images/location.svg";
import Clock from "./images/clock.svg";
import Post from "./images/post.svg";

import Stripe from "./images/stripe.svg";
import AES from "./images/AES256.svg";
import PayPal from "./images/paypal.svg";
import Visa from "./images/visa.svg";
import MasterCard from "./images/mastercard.svg";
import Discover from "./images/discover.svg";
import AmericnExpress from "./images/american-express.svg";

function Footer() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.topWrapper}>
          <div className={styles.top}>
            <div className={styles.left}>
              <p> BE IN TOUCH WITH US:</p>
            </div>

            <div className={styles.contactForm}>
              <input type="text" placeholder="Enter your email" />

              <span>JOIN US</span>
            </div>

            <div className={styles.right}>
              <img src={Facebook} alt="phone" />

              <img src={Instagram} alt="phone" />

              <img src={Twitter} alt="phone" />

              <img src={Pinterest} alt="phone" />
            </div>
          </div>
        </div>

        <div className={styles.middleWrapper}>
          <div className={styles.middle}>
            <div className={styles.middleItem}>
              <span className={styles.middleItemUpperCase}>Categories</span>
              <span>Men</span>
              <span>Women</span>
              <span>Accesories</span>
              <span>Beauty</span>
            </div>

            <div className={styles.middleItem}>
              <span className={styles.middleItemUpperCase}>Information</span>
              <span>About Us</span>
              <span>Contact Us</span>
              <span>Blog</span>
              <span>FAQs</span>
            </div>

            <div className={styles.middleItem}>
              <span className={styles.middleItemUpperCase}>Usefdul liks</span>
              <span>Terms &#38; conditions</span>
              <span>Return &#38; Exchanges</span>
              <span>Shipping &#38; Delivery</span>
              <span>Privacy Policy</span>
            </div>

            <div className={styles.middleItem}>
              <span className={styles.middleItemUpperCase}>Contact us</span>
              <div>
                <img src={Location} alt="phone" />
                <span>Belarus, Gomel, Lange 17</span>
              </div>
              <div>
                <img src={Phone} alt="phone" />
                <span>+375 29 100 20 30</span>
              </div>
              <div>
                <img src={Clock} alt="phone" />
                <span>All week 24/7</span>
              </div>
              <div>
                <img src={Post} alt="phone" />
                <span>
                  <a href="info@clevertec.ru">info@clevertec.ru</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomWrapper}>
          <div className={styles.bottom}>
            <div>
              <span>Copyright © 2032 all rights reserved</span>
            </div>

            <div className={styles.images}>
              <img src={Stripe} alt="phone" />
              <img src={AES} alt="phone" />
              <img src={PayPal} alt="phone" />
              <img src={Visa} alt="phone" />
              <img src={MasterCard} alt="phone" />
              <img src={Discover} alt="phone" />
              <img src={AmericnExpress} alt="phone" />
            </div>

            <div>
              <span>
                <a href="info@clevertec.ru">clevertec.ru/trainig</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
