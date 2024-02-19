import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutContent = () => {
  return (
    <Box p={'10px'} height={'calc(100vh - 60px)'} overflowY={'auto'}>
      <Outlet/>
    </Box>
  )
}

export default LayoutContent