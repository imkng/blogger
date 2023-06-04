import Image from 'next/image'
import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©2023 Blogger. All rights reserved.</div>
        <div className={styles.social}>
          <Image src='/1.png' height={15} width = {15} className={styles.icon}/>
          <Image src='/2.png' height={15} width = {15} className={styles.icon}/>
          <Image src='/3.png' height={15} width = {15} className={styles.icon}/>
          <Image src='/4.png' height={15} width = {15} className={styles.icon}/>
        </div>
    </div>
  )
}

export default Footer