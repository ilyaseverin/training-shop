import React from "react";
import styles from "./men.module.css";
import ItemCard from "../ItemCard/itemCard";

function Men() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {Array.from({ length: 8 }).map((item, idx) => (
            <ItemCard
              key={idx}
              image={require(`./images/rectangle${idx + 1}.svg`)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Men;
