import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

const Blog = () => {
  return (
    <div className={styles.mainCoontainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image 
            src = "https://images.pexels.com/photos/17170319/pexels-photo-17170319/free-photo-of-landscape-field-summer-sun.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt = ""
            width = {400}
            height = {250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image 
            src = "https://images.pexels.com/photos/17170319/pexels-photo-17170319/free-photo-of-landscape-field-summer-sun.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt = ""
            width = {400}
            height = {250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image 
            src = "https://images.pexels.com/photos/17170319/pexels-photo-17170319/free-photo-of-landscape-field-summer-sun.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt = ""
            width = {400}
            height = {250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog