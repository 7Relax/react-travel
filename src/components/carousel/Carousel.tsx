import React from 'react'
import styles from './Carousel.module.css'
import { Image, Carousel as AntCarousel } from 'antd'
import cImage1 from '../../assets/images/carousel_1.jpg'
import cImage2 from '../../assets/images/carousel_2.jpg'
import cImage3 from '../../assets/images/carousel_3.jpg'

export const Carousel: React.FC = () => {
  return (
    <AntCarousel autoplay className={styles.slider}>
      <Image src={cImage1} />
      <Image src={cImage2} />
      <Image src={cImage3} />
    </AntCarousel>
  )
}
