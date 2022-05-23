import React, { useState } from 'react'
import { Button, type ButtonProps } from 'antd'

interface Props extends ButtonProps {
  onClick?(): unknown
}

const AsyncButton = ({ onClick, ...rest }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const onClickLocal = async () => {
    if (onClick) {
      setIsLoading(true)
      try {
        await onClick()
      } catch (error) {
        //
      }
      setIsLoading(false)
    }
  }
  return <Button {...rest} loading={isLoading} onClick={onClickLocal} />
}

export default AsyncButton
