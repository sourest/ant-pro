import React from 'react'
import { Typography } from 'antd'
import AsyncButton from '../../source/components/AsyncButton'

const AsyncButtonDemo = () => {
  const getUser = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert('获取成功')
        resolve(true)
      }, 1e3)
    })
  }

  return (
    <div>
      <Typography.Title level={2}>异步按钮</Typography.Title>
      <AsyncButton onClick={getUser}>按钮</AsyncButton>
    </div>
  )
}

export default AsyncButtonDemo
