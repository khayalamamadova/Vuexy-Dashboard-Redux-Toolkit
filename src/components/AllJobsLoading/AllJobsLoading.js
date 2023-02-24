import React from 'react'
import { Box, LinearProgress } from '@mui/material'

const AllJobsLoading = () => {
  return (
    <Box sx={{ minWidth: '400px', padding: '64px' }}>
    <LinearProgress />
  </Box>
  )
}

export default AllJobsLoading