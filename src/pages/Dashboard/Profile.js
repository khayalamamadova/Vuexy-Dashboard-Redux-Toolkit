import React from 'react'
import { styled } from '@mui/material/styles';
import {Box, Container, Paper, Grid} from '@mui/material';
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Profile = () => {
  return (
    <Container sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Item>
          <ProfileDetails/>
        </Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=4</Item>
      </Grid>
    </Grid>
  </Container>
  )
}

export default Profile