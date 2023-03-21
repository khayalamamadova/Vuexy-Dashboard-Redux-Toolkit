import React from 'react'
import UserTasks from '../UserTasks/UserTasks'
import { Box, Typography, Divider } from '@mui/material'
import avatar from '../../assets/images/avatar.png'
import UserStatusBtn from '../UserStatusBtn/UserStatusBtn'


const UserDetails = ({userSurname,userName}) => {
    console.log(userSurname,userName);
  return (
    <>
    <Box sx={{padding:'24px', display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
        <Box sx={{width: '120px', height: '120px', overflow: 'hidden'}}>
            <Box component='img' src={avatar} sx={{width: '100%',height: '100%', objectFit: 'contain',borderRadius: '4px'}}/>
        </Box>
        <Typography sx={{fontSize: '20px', fontWeight: 500, textTransform: 'capitalize' ,color: 'rgba(51,48,60,.87)',mt: '16px',letterSpacing: '0.25px',lineHeight: '24px'}} component='h4'>{userName} {userSurname}</Typography>
        <UserStatusBtn name='admin'/>
    </Box>
    <Box sx={{padding: '0 24px 24px',mt: '12px'}}>
        <UserTasks />
    </Box>
    <Divider />
    </>

  )
}

export default UserDetails