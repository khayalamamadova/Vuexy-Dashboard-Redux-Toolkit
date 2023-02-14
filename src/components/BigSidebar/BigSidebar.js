import { styled } from "@mui/system";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { menuItems } from "../../data/menuItems";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import AdjustIcon from '@mui/icons-material/Adjust';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';



const BigSidebar = ({ toggleMenu, sidebar }) => {
  const history = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        "&:hover .activeBlock": {
          display: "block"
        }
      }}
    >
      <Box sx={{ textDecoration: "none", padding: "16px 12px" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ mr: "16px" }}>
              <svg
                width={34}
                height={24}
                viewBox="0 0 34 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.00183571 0.3125V7.59485C0.00183571 7.59485 -0.141502 9.88783 2.10473 11.8288L14.5469 23.6837L21.0172 23.6005L19.9794 10.8126L17.5261 7.93369L9.81536 0.3125H0.00183571Z"
                  fill="#7367F0"
                />
                <path
                  opacity="0.06"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.17969 17.7762L13.3027 3.75173L17.589 8.02192L8.17969 17.7762Z"
                  fill="#161616"
                />
                <path
                  opacity="0.06"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.58203 17.2248L14.8129 5.24231L17.6211 8.05247L8.58203 17.2248Z"
                  fill="#161616"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.25781 17.6914L25.1339 0.3125H33.9991V7.62657C33.9991 7.62657 33.8144 10.0645 32.5743 11.3686L21.0179 23.6875H14.5487L8.25781 17.6914Z"
                  fill="#7367F0"
                />
              </svg>
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: "22px",
                fontWeight: "bold",
                letterSpacing: "normal",
                lineHeight: "32px",
                color: "#e4e6f4de",
                textAlign: "left",
                display: sidebar ? "block" : "none",
              }}
              className='activeBlock'
            >
              <span>Vuexy</span>
              <button type="button" onClick={toggleMenu} style={{background: 'transparent', border: 'none', outline: 'none', color: '#e4e6f4de',position: 'relative', top: '3px',right: '-68px',cursor: 'pointer'}}>
                {sidebar ? <AdjustIcon /> : <PanoramaFishEyeIcon/>}
              </button>
            </Typography>
          </Box>
        </Link>
      </Box>
      {/* list links */}
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            onClick={() => history(item.path)}
            sx={{
              background: location.pathname === item.path ? "#7367F0" : null,
              cursor: "pointer",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor:
                  location.pathname !== item.path ? "primary.main" : null,
              },
            }}
          >
            <ListItemIcon sx={{ color: "secondary.contrastText" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                color: "#e4e6f4de",
                display: sidebar ? "block" : "none",
              }}
              className='activeBlock'
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BigSidebar;
