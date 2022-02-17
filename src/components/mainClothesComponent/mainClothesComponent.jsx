import React from "react";
import Men from "../men/men";
import Women from "../women/women";
import styles from "./mainClothesComponent.module.css";
function MainClothesComponent() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.topWrapper}>
          <div className={styles.top}>
            <div className={styles.left}>
              <span>WOMEN`S</span>
            </div>
            <div className={styles.right}>
              <span>NEW ARRIVALS</span>

              <span>SPECIALS</span>

              <span>BESTSELLERS</span>

              <span>MOST VIEWED</span>

              <span>FEATURED PRODUCTS</span>
            </div>
          </div>
        </div>
        <Women />
        <div className={styles.bottomWrapper}>
          <div className={styles.bottom}>
            <span>see all</span>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.topWrapper}>
          <div className={styles.top}>
            <div className={styles.left}>
              <span>MEN`S</span>
            </div>
            <div className={styles.right}>
              <span>NEW ARRIVALS</span>

              <span>SPECIALS</span>

              <span>BESTSELLERS</span>

              <span>MOST VIEWED</span>

              <span>FEATURED PRODUCTS</span>
            </div>
          </div>
        </div>
        <Men />
        <div className={styles.bottomWrapper}>
          <div className={styles.bottom}>
            <span>see all</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainClothesComponent;
