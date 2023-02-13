import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {MegaMenu} from '../../data/menuItems'




const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "500px",
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const history = useNavigate();

  return (
    <div>
      <Button
        sx={{
          textTransform: "capitalize",
          color: "#33303c61",
          fontSize: "16px",
          lineHeight: "24px",
          ":hover": {
            bgcolor: "transparent",
          },
          "&:active": { bgcolor: "transparent" },
          color: "#33303c61",
          pl: 0,
          border: 0,
        }}
        onClick={handleClickOpen}
      >
        <SearchIcon sx={{ mr:1,}} />
        Search
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle sx={{pl:0}}
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Search>
            <SearchIconWrapper sx={{p:0}}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase  inputProps={{ "aria-label": "search" }} />
          </Search>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
            <Grid item xs={12} sm={6}>
              <Typography variant='p' sx={{ color: 'rgba(51,48,60,.38)',textTransform:'uppercase'}}>Popular searches</Typography>
              <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
            {
                MegaMenu.slice(0,4).map(list => (
                    <ListItem key={list.text} onClick={()=>history(list.path)} sx={{p:0}}>
                    <ListItemButton>
                      <ListItemIcon>
                        {list.icon}
                      </ListItemIcon>
                      <ListItemText primary={list.text} />
                    </ListItemButton>
                  </ListItem> 
                ))
            }
    </List>

            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='p' sx={{ color: 'rgba(51,48,60,.38)', textTransform:'uppercase'}} align='center'>apps & pages</Typography>
              <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
            {
                MegaMenu.slice(4,MegaMenu.length).map(list => (
                    <ListItem key={list.text} onClick={()=>history(list.path)} sx={{p:0}}>
                    <ListItemButton>
                      <ListItemIcon>
                        {list.icon}
                      </ListItemIcon>
                      <ListItemText primary={list.text} />
                    </ListItemButton>
                  </ListItem> 
                ))
            }
    </List>

            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='p' sx={{ color: 'rgba(51,48,60,.38)', textTransform:'uppercase'}} align='center'>USER INTERFACE</Typography>
              <List 
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
            {
                MegaMenu.slice(4,MegaMenu.length).map(list => (
                    <ListItem sx={{p:0}} key={list.text} onClick={()=>history(list.path)}>
                    <ListItemButton>
                      <ListItemIcon >
                        {list.icon}
                      </ListItemIcon>
                      <ListItemText primary={list.text} />
                    </ListItemButton>
                  </ListItem> 
                ))
            }
    </List>

            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='p' sx={{ color: 'rgba(51,48,60,.38)',textTransform:'uppercase'}}>POPULAR SEARCHES</Typography>
              <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
            {
                MegaMenu.slice(0,4).map(list => (
                    <ListItem key={list.text} onClick={()=>history(list.path)} sx={{p:0}}>
                    <ListItemButton>
                      <ListItemIcon>
                        {list.icon}
                      </ListItemIcon>
                      <ListItemText primary={list.text} />
                    </ListItemButton>
                  </ListItem> 
                ))
            }
    </List>

            </Grid>
          </Grid>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}