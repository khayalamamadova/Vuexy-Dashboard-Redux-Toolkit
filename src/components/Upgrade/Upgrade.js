import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from "@mui/material";
import React from "react";
import UserStatusBtn from "../UserStatusBtn/UserStatusBtn";
import UpgradeParts from "../UpgradeParts/UpgradeParts";
import CustomizedProgressBars from '../CustomizedProgressBars/CustomizedProgressBars';
import PrimaryButton from '../PrimaryButton/PrimaryButton';


const Amount = styled('h6')(({ theme }) =>({
  position: 'relative',
  margin: '0',
  fontSize: "48px",
  fontWeight: 600,
  lineHeight: "56px",
  color: theme.palette.primary.main,
  '&::before': {
    content: "'$'",
    position: 'absolute',
    top: '8px',
    left: '-8px',
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
  },
  'span': {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
    color: theme.palette.textColor.main,
    letterSpacing: "0.7px",
}
}))
const Upgrade = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <UserStatusBtn name="standart" />
        <Amount
        >
          99
          <Typography
            component="span"
          >
            /month
          </Typography>
        </Amount>
      </Box>
      <UpgradeParts/>
      <Box sx={{margin: '24px 0'}}>
          <Box sx={{display: 'flex', justifyContent: 'space-between',fontSize: '16px', fontWeight: 400,color: 'textColor.main', marginBottom: '8px'}}>
            <Typography variant='strong'>Days</Typography>
            <Typography variant='strong'>26 of 30 Days</Typography>
          </Box>
          <CustomizedProgressBars mainColor="#EFEDFD" secondaryColor='#7367F0' progress='50%'/>
          <Typography component='p' sx={{margin: '8px 0 16px', textAlign: 'left', fontSize: '16px', fontWeight:400, lineHeight: '24px', color: 'textColor.main'}}>4 days remaining</Typography>
          <PrimaryButton text='upgrade plan'/>
      </Box>

    </Box>
  );
};

export default Upgrade;
