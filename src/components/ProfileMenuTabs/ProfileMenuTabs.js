import * as React from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import ProfileProjectListTable from "../ProfileProjectListTable/ProfileProjectListTable";
import { Box, Paper, Tabs,Typography,Tab} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LinkIcon from "@mui/icons-material/Link";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import HttpsIcon from "@mui/icons-material/Https";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProfileMenuTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          sx={{
            "& .MuiTabs-indicator": { height: "0" },
            "& .Mui-selected": {
              color: "#fff !important",
              backgroundColor: "primary.main",
              borderRadius: "6px",
            },
            "& .MuiTab-root": {
              minHeight: "38px",
              fontSize: "14px",
              fontWeight: "500",
              letterSpacing: "1.25px",
              textTransform: "uppercase",
            },
          }}
        >
          <Tab
            icon={<NotificationsNoneIcon />}
            iconPosition="start"
            label="NOTIFICATIONS"
            {...a11yProps(0)}
          />
          <Tab
            icon={<LinkIcon />}
            iconPosition="start"
            label="CONNECTIONS"
            {...a11yProps(1)}
          />
          <Tab
            icon={<AttachMoneyIcon />}
            iconPosition="start"
            label="BILLING AND PLAN"
            {...a11yProps(2)}
          />
          <Tab
            icon={<PersonAddAltIcon />}
            iconPosition="start"
            label="OVERVIEW"
            {...a11yProps(3)}
          />
          <Tab
            icon={<HttpsIcon />}
            iconPosition="start"
            label="SECURITY"
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Item>
          <ProfileProjectListTable />
        </Item>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Item>Two</Item>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Item>Three</Item>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Item>Four</Item>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Item>Five</Item>
      </TabPanel>
    </Box>
  );
}
