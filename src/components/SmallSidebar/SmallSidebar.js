import { styled } from '@mui/system'
import React from 'react'

const SmallSidebarWrapper = styled('div')({
  width: '80px',
  position: "fixed",
  left: 0,
  top: 0,
  background: "blue",
  minHeight: '100vh',
  display: 'none'
})

const SmallSidebar = () => {
  return (
    <SmallSidebarWrapper>SmallSidebar</SmallSidebarWrapper>
  )
}

export default SmallSidebar