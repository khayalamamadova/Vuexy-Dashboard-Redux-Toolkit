import { Box, Button, Paper, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FormField from "../../components/FormField/FormField";
import FormSelect from "../../components/FormSelect/FormSelect";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from "../../features/jobSlice/jobSlice";

const AddJobs = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      );
      return;

    }

    
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  
  return (
    <Container>
      <Typography>{isEditing ? "edit job" : "add job"}</Typography>
      {/* <Button onClick={handleaddJobBtn}>+Add new Job</Button> */}
      {/* sx={{display: addJobBtn ? 'block' :'none',visibility: addJobBtn ? 'visible' : 'hidden'}} */}
      <Button>+Add new Job</Button>

      <Paper variant="outlined">
        <Typography element="h3">
          {isEditing ? "edit job" : "add job"}
        </Typography>
        <Box component="form">
          {/* position */}
          <FormField
            type="text"
            labelName="Positon"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormField
            type="text"
            labelName="Company"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* jobLocation */}
          <FormField
            type="text"
            labelName="Job Location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* statys */}
          <FormSelect
            name="status"
            labelText="Status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/* job type */}
          <FormSelect
            name="jobType"
            labelText="Job Type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          <Button type="button" onClick={() => dispatch(clearValues())}>
            clear
          </Button>
          <Button type="submit" onClick={handleSubmit} disabled={isLoading}>
            submit
          </Button>
        </Box>
      </Paper>
      <SearchContainer />
    </Container>
  );
};

export default AddJobs;
