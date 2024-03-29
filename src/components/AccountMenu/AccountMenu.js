import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import avatar from "../../assets/images/avatar.png";
import { List, Button } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { accountMenu } from "../../data/menuItems";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { logoutUser } from "../../features/userSlice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

function AccountMenu() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const history = useNavigate();
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  

  return (
    <Box sx={{ flexGrow: 0, ml: 1 }}>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mt: "4px" }}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          {" "}
          <Avatar alt="Remy Sharp" src={avatar} width="40" height="40" />
        </StyledBadge>
      </IconButton>
      <Menu
        sx={{ mt: "45px", minWidth: "230px", bgColor: "red" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <List
          sx={{ width: "100%", bgcolor: "background.paper", minWidth: "230px" }}
          aria-label="contacts"
        >
          <Box
            sx={{
              pl: "16px",
              mb: "8px",
              display: "flex",
              alignItems: "justify-content",
            }}
          >
            <Box>
              <Avatar alt="Remy Sharp" src={avatar} width="40" height="40" />
            </Box>
            <Box sx={{ ml: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  textTransform: "capitalize",
                  color: "#33303CDE",
                  fontSize: "16px",
                  fontWeight: "600",
                  letterSpacing: "0.15px",
                  lineHeight: "24px",
                }}
              >
                {user?.name}
                <span> {user?.lastName}</span>
              </Typography>
              <Typography
                sx={{
                  color: "rgba(51,48,60,.87)",
                  letterSpacing: "0.25px",
                  lineHeight: "16px",
                  opacity: "0.68",
                }}
                variant="span"
              >
                admin
              </Typography>
            </Box>
          </Box>
          <Divider />
          {accountMenu.map((item) => (
            <ListItem key={item.text} onClick={() => history(item.path)}>
              <ListItemButton
                sx={{
                  p: 0,
                  color: "mainText.main",
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: "600",
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
          <Button
            sx={{
              p: 0,
              color: "mainText.main",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "600",
              padding: "0 18px",
              textTransform: "capitalize",
            }}
            type="button"
            onClick={() => dispatch(logoutUser("Log out"))}
          >
            <LogoutOutlinedIcon />
            <Box component="span" sx={{ display: "inline-block", ml: "32px" }}>
              Log out
            </Box>
          </Button>
        </List>
      </Menu>
    </Box>
  );
}
export default AccountMenu;
