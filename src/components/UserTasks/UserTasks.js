import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Box, Typography } from "@mui/material";

const tasks = [
  {
    taskName: "Task Done",
    taskAmount: "1,230",
    taskIcon: <TaskAltIcon />,
  },
  {
    taskName: "Project Done",
    taskAmount: "568",
    taskIcon: <BusinessCenterIcon />,
  },
];

const UserTasks = () => {
  return (
    <>
      {tasks.length > 0
        ? tasks.map((task) => (
            <Box sx={{ maxWidth: "140px", margin: "0 auto" }}>
              <Box sx={{ display: "flex", mb: "8px", letterSpacing: "0.2px" }}>
                <Box
                  sx={{
                    marginRight: "12px",
                    width: "38px",
                    height: "38px",
                    backgroundColor: "#EFEDFD",
                    borderRadius: "6px",
                    color: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {task.taskIcon}
                </Box>
                <Box sx={{ textAlign: "left", width: "100% - 50px" }}>
                  <Typography
                    component="p"
                    sx={{
                      margin: 0,
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: 600,
                      color: "textColor",
                    }}
                  >
                    {task.taskAmount}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "rgb(51,48,60,0.68)",
                      lineHeight: "20px",
                    }}
                  >
                    {task.taskName}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))
        : "there is on task"}
    </>
  );
};

export default UserTasks;
