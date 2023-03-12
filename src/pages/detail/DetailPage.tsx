import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface MatchParams {
  touristRouteId: string
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  // 获取路径参数对象 props.match.params
  console.log('detail', props)
  return (
    <h1>旅游路线详情页, 路线Id: {props.match.params.touristRouteId}</h1>
  )
}
