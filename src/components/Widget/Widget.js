import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import {userCard} from '../../data/userWidgetData'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: '24px',
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Widget = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: '24px' }}>
      <Grid container spacing={2}>
            {userCard.length > 0 ?
            userCard.map(card=> (
                <Grid item xs={12} md={3} key={card.id}>
                <Item>
                  <Box sx={{display: 'flex'}}>
                      <Box sx={{width: 'calc(100% - 40px)',textAlign: 'left',margin: '6px 0'}}>
                          <Typography component='h4' sx={{margin: '0',fontSize: '16px',fontWeight: '400', lineHeight: '24px',color: 'textColor.main',textTransform: 'capitalize'}}>{card.cardName}</Typography>
                          <Box sx={{fontSize: '20px', fontWeight: '500', lineHeight: '24px',letterSpacing:'0.25px', color: 'rgba(51,48,60,0.87)'}}>{card.cardUser}<Typography component='span'  sx={{color: card.cardPercentage.includes("-")
                          ? "rgb(234,84,85)"
                          : "rgb(40,199,111)", display: 'inline-block', marginLeft: '12px', fontSize: '16px', lineHeight: '24px', fontWeight: '400', letterSpacing:'0.28px'}}>({card.cardPercentage})</Typography> </Box>
                      </Box>
                      <Box sx={{width: '40px', backgroundColor: '#f4f4f4', borderRadius: '4px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px'}}>{card.cardIcon}
                      </Box>
                  </Box>
                  <Box sx={{textAlign:'left',fontSize: '16px', lineHeight: '24px', fontWeight: '400',color: 'textColor.main', textTransform: 'capitalize'}}>{card.cardFooter}</Box>
                </Item>
              </Grid>
            )) : 'no data'}
      </Grid>
    </Box>
  );
};

export default Widget;
