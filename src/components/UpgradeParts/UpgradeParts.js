import { Box } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
const upgradeTitles = [
    {
        title: '10 Users'
    },
    {
        title: 'Up to 10GB storage'
    },
    {
        title: 'Basic Support'
    },
]

const Title = styled('div')(({theme})=>({
    marginBottom: '12px',
    color: theme.palette.textColor.main,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    '&::before': {
        content: "''",
        display: 'inline-block',
        width: '12px',
        height: '12px',
        marginRight: '8px',
        borderRadius: '50%',
        border: '1px solid rgb(168,170,174)',
        background: 'transparent'
    }
}))
const UpgradeParts = () => {
  return (
    <Box sx={{mt: '24px',textAlign: 'left'}}>
        {
            upgradeTitles.length > 0 ? upgradeTitles.map(title => (
                <Title>{title.title}</Title>
            )) : 'no title' 
        }
    </Box>
  )
}

export default UpgradeParts