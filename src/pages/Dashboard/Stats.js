import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRow, fetchAsyncTable } from "../../features/tableSlice/tableSlice";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Avatar,
  Stack,
  Box,
  Button,
  Container,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import AllJobsLoading from "../../components/AllJobsLoading/AllJobsLoading";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";


const columns = [
  {
    title: "user",
  },
  {
    title: "department",
  },
  {
    title: "role",
  },
  {
    title: "billing",
  },
  {
    title: "gender",
  },
  {
    title: "Actions",
  },
];

const Stats = () => {
  const userData = useSelector((store) => store.tableSlice.users);
  const loading = useSelector((store) => store.tableSlice.isLoading);
  const dispatch = useDispatch();


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    dispatch(fetchAsyncTable());
  }, [dispatch]);

  const newData = userData["users"];
  //mui

  console.log(newData);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "32px" }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        {loading ? (
          <AllJobsLoading />
        ) : (
          <Table aria-label="table">
            <TableHead>
              <TableRow sx={{ width: "100%" }}>
                {columns.map((column, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      width: "calc(100% / 6)",
                      color: "success.textColor",
                      fontSize: "12px",
                      fontWeight: "bolder",
                      lineHeight: "48px",
                      textTransform: "uppercase",
                    }}
                  >
                    {column.title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {newData?.map((user) => {
                const { id, firstName, image, lastName, username, gender } =
                  user;
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                    <TableCell sx={{width: "28%" }}>
                      <Stack direction="row" spacing={2}>
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: "100%",
                            background: "#BDBDBD",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Avatar
                            alt={`${firstName} ${lastName}`}
                            src={image}
                            sx={{ width: 42, height: 42 }}
                          />
                        </Box>
                        <Box sx={{ textTransform: "capitalize" }}>
                          <Link style={{ textDecoration: "none" }}>
                            <Typography
                              sx={{
                                fontSize: "16px",
                                fontWeight: "bolder",
                                color: "textColor.main",
                                lineHeight: "24px",
                              }}
                              component="h6"
                            >{`${firstName} ${lastName}`}</Typography>
                          </Link>
                          <Typography
                            sx={{
                              textTransform: "capitalize",
                              fontSize: "14px",
                              lineHeight: "20px",
                              color: "rgba(51,48,60,.38)",
                            }}
                            variant="subtitle1"
                            gutterBottom
                          >
                            {`@${username}`}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell
                      sx={{
                        width: "calc(72 % / 5 )",
                        textTransform: "capitalize",
                        fontSize: "14px",
                        lineHeight: "24px",
                        color: "rgba(51,48,60,.87)",
                      }}
                    >
                      {user.company.department}
                    </TableCell>
                    <TableCell
                      sx={{
                        width: "calc(72 % / 5 )",
                        textTransform: "capitalize",
                        fontSize: "14px",
                        lineHeight: "24px",
                        fontWeight: "bolder",
                        color: "rgba(51,48,60,.87)",
                      }}
                    >
                      {user.company.title}
                    </TableCell>
                    <TableCell sx={{                         width: "calc(72 % / 5 )",
 }}>
                      <Box
                        component="span"
                        sx={{
                          display: "block",
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "24px",
                          textTransform: "capitalize",
                        }}
                      >
                        {user.bank.cardType}
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        width: "calc(72 % / 5 )",

                        textAlign: "center",
                        color: gender === "male" ? "pink" : "blue",
                      }}
                    >
                      {gender === "male" ? <MaleIcon /> : <FemaleIcon />}
                    </TableCell>
                    <TableCell>
                    <Stack direction="row" spacing={1}>
      <IconButton>
        <EditIcon />
      </IconButton>
      <IconButton onClick={()=> dispatch(deleteRow(id))}>
        <DeleteOutlineIcon />
      </IconButton>

    </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={newData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
};

export default Stats;
