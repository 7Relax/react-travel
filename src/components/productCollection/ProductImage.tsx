import React from 'react'
import { Image, Typography } from 'antd'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
// import { MyLink } from '../link'

interface PropsType extends RouteComponentProps {
  id: string | number
  size: 'large' | 'small'
  imageSrc: string
  price: string | number
  title: string
}

const ProductImageComponent: React.FC<PropsType> = ({
  id, size, imageSrc, price, title, history, location, match
}) => {
  return (
    <Link to={`/detail/${id}`}>
      {size === 'large' ? (
        <Image src={imageSrc} height={285} width={490} />
      ) : (
        <Image src={imageSrc} height={120} width={240} />
      )}
      <div>
        <Typography.Text type='secondary'>{title.slice(0, 12)}</Typography.Text>
        <Typography.Text type='danger' strong>￥{price}起</Typography.Text>
      </div>
    </Link>
  )
}

// 文件的输出对象：是使用HOC高阶函数 withRouter 处理过的组件
export const ProductImage = withRouter(ProductImageComponent)
