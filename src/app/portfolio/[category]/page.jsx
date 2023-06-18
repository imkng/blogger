import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>Description</p>
          <Button text="See More" url = "#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.img}
            fill = {true}
            src = "https://images.pexels.com/photos/17170319/pexels-photo-17170319/free-photo-of-landscape-field-summer-sun.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>Description</p>
          <Button text="See More" url = "#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.img}
            fill = {true}
            src = "https://images.pexels.com/photos/17170319/pexels-photo-17170319/free-photo-of-landscape-field-summer-sun.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>Description</p>
          <Button text="See More" url = "#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.img}
            fill = {true}
            src = "https://images.pexels.com/photos/17170319/pexels-photo-17170319/free-photo-of-landscape-field-summer-sun.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
