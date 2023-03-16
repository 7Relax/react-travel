import React from 'react'
import { Comment, List } from 'antd'

interface PropsType {
  // 组件需要传入一个列表形式的评论数组
  data: {
    author: string
    avatar: string
    content: string
    createDate: string
  }[]
}

export const ProductComments: React.FC<PropsType> = ({data}) => {
  return (
    <List
      dataSource={data}
      itemLayout='horizontal'
      renderItem={(item) => (
        <li>
          <Comment
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.createDate}
          />
        </li>
      )}
    >
    </List>
  )
}
