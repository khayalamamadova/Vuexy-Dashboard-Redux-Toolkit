import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncTable } from '../../features/tableSlice/tableSlice'
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


const Stats = () => {
  const userData = useSelector(store => store.tableSlice.users)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchAsyncTable())
  },[dispatch])
  console.log(userData);

  //mui   


  return (
    <div className="">
      hello
      {/* {userData.posts.map(user => <h4>{user.title}</h4>)} */}
    </div>    
  )
}

export default Stats