import React from "react";
import styles from "./page.module.css";
import Image from "next/image";


const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem Ipsum </h1>
          <p className={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/16791430/pexels-photo-16791430/free-photo-of-sea-1.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Jhon Deo</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/16791430/pexels-photo-16791430/free-photo-of-sea-1.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </div>
  );
};

export default BlogPost;