import React from 'react'
import styles from './BusinessPartners.module.css'
import { Divider, Typography, Row, Col, Image } from 'antd'
import image1 from '../../assets/images/facebook-807588_640.png'
import image2 from '../../assets/images/follow-826033_640.png'
import image3 from '../../assets/images/icon-720944_640.png'
import image4 from '../../assets/images/microsoft-80658_640.png'
const images = [image1, image2, image3, image4]

export const BusinessPartners: React.FC = () => {
  return (
    <div className={styles.content}>
      <Divider orientation='left'>
        <Typography.Title level={3}>合作企业</Typography.Title>
      </Divider>
      <Row>
        {images.map((img, index) => (
          <Col span={6} key={`bussiness-partner-${index}`}>
            <Image
              src={img} alt='bussiness-partner'
              style={{
                width: '80%',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}
