import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRow,
  fetchAsyncTable,
  editUser,
  updateUser,
} from "../../features/tableSlice/tableSlice";
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
import { Link, useNavigate } from "react-router-dom";
import AllJobsLoading from "../../components/AllJobsLoading/AllJobsLoading";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import AddUserBtn from "../../components/AddUserBtn/AddUserBtn";
import Widget from "../../components/Widget/Widget";

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
    title: "city",
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
  const { isLoading} = useSelector((store) => store.tableSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    dispatch(fetchAsyncTable());
  }, []);

  //mui

  return (
    <>
      <Widget />
      <Paper sx={{minHeight: '50px',padding: '16px',textAlign:'right'}}><AddUserBtn /></Paper>
      <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "32px" }}>
        <TableContainer sx={{ maxHeight: 600 }}>
          {isLoading ? (
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
                {userData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => {
                  const {
                    id,
                    firstName,
                    image,
                    lastName,
                    username,
                    gender,
                    city,
                    department,
                    name,
                    title,
                  } = user;
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                      <TableCell sx={{ width: "28%" }}>
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
                            <Link
                              to={`users/${id}`}
                              style={{ textDecoration: "none" }}
                            >
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
                                textTransform: "lowercase",
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
                        {department}
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
                        {title}
                      </TableCell>
                      <TableCell sx={{ width: "calc(72 % / 5 )" }}>
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
                          {city}
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
                        <Stack sx={{display: 'flex', alignItems:'center',flexDirection: 'row'}}>
                          <Link
                            to='edit-user'
                            onClick={() =>
                              dispatch(
                                updateUser({
                                  editJobId: id,
                                  firstName,
                                  lastName,
                                  username,
                                  department,
                                  city,
                                  gender,
                                  title,
                                })
                              )
                            }
                          >
                            <EditIcon                           sx={{color: 'gray'}}
  />
                          </Link>
                          <IconButton onClick={() => dispatch(deleteRow(id))}>
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
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={userData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>

  );
};

export default Stats;
