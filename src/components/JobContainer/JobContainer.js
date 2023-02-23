import React, { useEffect } from "react";
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
  Box,
  Button,
} from "@mui/material";
import { getAllJobs } from "../../features/allJobsSlice/allJobsSlice";
import { useSelector, useDispatch } from "react-redux";
import AllJobsLoading from "../AllJobsLoading/AllJobsLoading";
import { deleteJob, setEditJob } from "../../features/jobSlice/jobSlice";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "COMPANY",
  },
  {
    title: "POSITION",
  },
  {
    title: "JOB LOCATION",
  },
  {
    title: "STATUS",
  },
  {
    title: "JOB TYPE",
  },
  {
    title: "Actions",
  },
];

const JobContainer = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // custom

  const { isLoading, jobs } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (isLoading) {
    return <AllJobsLoading />;
  }

  if (jobs.length === 0) {
    return <Typography component="h3">No data available</Typography>;
  }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "32px" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{ width: "100%", background: "green" }}>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  sx={{
                    width: "calc(100% / 5)",
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
            {jobs
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((job) => {
                const { position, status, _id, company, jobType, jobLocation } =
                  job;
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={_id}>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                          sx={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "32px",
                            backgroundColor: "#7367F0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "12px",
                            fontSize: "24px",
                            color: "#fff",
                            fontWeight: "bolder",
                          }}
                        >
                          {company.charAt(0)}
                        </Box>
                        {company}
                      </Box>
                    </TableCell>
                    <TableCell>{position}</TableCell>
                    <TableCell>{jobLocation}</TableCell>
                    <TableCell>
                      <Box
                        className={status}
                        component="span"
                        sx={{
                          display: "block",
                          width: 70,
                          height: "30px",
                          fontSize: "13px",
                          fontWeight: 400,
                          lineHeight: "30px",
                          textAlign: "center",
                          borderRadius: "8px",
                          textTransform: "capitalize",
                        }}
                      >
                        {status}
                      </Box>
                    </TableCell>
                    <TableCell>{jobType}</TableCell>
                    <TableCell>
                      <Link
                        to="/add-jobs"
                        type="button"
                        onClick={() =>
                          dispatch(
                            setEditJob({
                              editJobId: _id,
                              company,
                              status,
                              jobType,
                              jobLocation,
                              position,
                            })
                          )
                        }
                      >
                        edit
                      </Link>
                      <Button
                        type="button"
                        onClick={() => dispatch(deleteJob(_id))}
                      >
                        delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={jobs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default JobContainer;
