import { styled } from '@mui/system';
import { Link } from "react-router-dom";

export const PrimaryButton = styled(Link)({
    fontSize: 16,
    border: '1px solid #7367F0',
    height: '38px',
    backgroundColor: '#7367F0',
    lineHeight: '36px',
    color: '#fff',
    minWidth: '150px',
    display: 'inline-block',
    textAlign:'center',
    cursor:'pointer',
    borderRadius: '4px',
    textDecoration:'none',
    transition: 'ease all 0.4s',
    '&:hover': {
        color: "#7367F0",
        backgroundColor:'transparent'
     }

})