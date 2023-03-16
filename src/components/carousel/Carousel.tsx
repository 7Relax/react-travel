import React from 'react'
import styles from './Carousel.module.css'
import { Image, Carousel as AntCarousel } from 'antd'
// import cImage1 from '../../assets/images/carousel_1.jpg'
// import cImage2 from '../../assets/images/carousel_2.jpg'
import cImage3 from '../../assets/images/carousel_3.jpg'

export const Carousel: React.FC = () => {
  return (
    <AntCarousel autoplay className={styles.slider}>
      <Image src={cImage3} />
      <Image src='https://cdn.pixabay.com/photo/2018/08/24/23/33/field-3629120__340.jpg' />
      <Image src='https://cdn.pixabay.com/photo/2014/02/28/16/45/mountains-276995__340.jpg' />
    </AntCarousel>
  )
}
