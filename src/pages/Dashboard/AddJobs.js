import { Box, Button, Paper, Container } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FormField from "../../components/FormField/FormField";
import FormSelect from "../../components/FormSelect/FormSelect";
import {
  handleChange,
  clearValues,
  createJob,
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all fields");
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
      <Paper variant="outlined">
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
    </Container>
  );
};

export default AddJobs;
