import React from 'react'
import { useHistory } from 'react-router-dom'

interface LinkProps {
  to: string
}

export const MyLink: React.FC<LinkProps> = ({children, to}) => {
  const history = useHistory()
  return (
    <a href={to} onClick={() => {history.push(to)}}>
      {children}
    </a>
  )
}
