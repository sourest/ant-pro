import React from 'react'
import { Typography, Divider } from 'antd'
import AsyncButton from './compnents/AsyncButton'
import 'antd/dist/antd.css'

const App = () => {
  return (
    <div style={{ margin: 'auto', padding: 40, maxWidth: 960 }}>
      <Typography.Title>例子</Typography.Title>
      <AsyncButton />
      <Divider />
    </div>
  )
}

export default App
