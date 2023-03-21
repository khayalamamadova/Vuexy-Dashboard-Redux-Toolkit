import * as React from "react";
import {
  Typography,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  Table,
  TableBody,
  Avatar,
  Box
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {tableData} from '../../data/projectListTableData'
import CustomizedProgressBars from "../CustomizedProgressBars/CustomizedProgressBars";


const TableTitle = styled(TableCell)({
  fontSize: "12px",
  fontWeight: "700",
  lineHeight: "18px",
  color: "rgba(51,,48,60,.87)",
  textTransform: "uppercase",
});

export default function ProfileProjectListTable() {
  return (
    <>
      <Typography
        component="h4"
        sx={{
          margin: "0",
          textAlign: "left",
          fontSize: "20px",
          fontWeight: 500,
          lineHeight: "26px",
          letterSpacing: "0.25px",
          color: "subtitle.main",
          textTransform: "capitalize",
          padding: "24px",
        }}
      >
        User's Projects List
      </Typography>
      <hr />
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableTitle>project</TableTitle>
              <TableTitle align="right">total task</TableTitle>
              <TableTitle align="right">progress</TableTitle>
              <TableTitle align="right">hours</TableTitle>
            </TableRow>
          </TableHead>
          <TableBody>
            
            {
                tableData.length > 0 ? tableData.map(cell => (
                    (
                        <TableRow
                        key={cell.TableTitle}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          <Box  sx={{display: 'flex',alignItems:'center'}}>
                            <Avatar 
                              alt="Remy Sharp"
                              src={cell.img}
                              sx={{ width: 38, height: 38,marginRight: '12px' }}
                            />
                            <Box sx={{width: 'calc(100% - 50px)'}}>
                            <Typography variant="h4" gutterBottom sx={{fontSize: '16px',lineHeight: '24px', color: 'rgba(51,48,60,0.87)',margin: '0'}}>{cell.title}</Typography>
                            <Typography sx={{fontSize: '14px',lineHeight: '20px', color: 'rgba(51,48,60,0.38)',margin: '0'}} variant="subtitle1" gutterBottom>{cell.subtitle}</Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell align="right">
                            <Typography component='p' sx={{margin:0, fontSize: '14px', lineHeight: '21px',color: 'rgba(51,48,60,0.87)'}}>{cell.totalTask}</Typography>
                        </TableCell>
                        <TableCell align="right">
                        <Typography component='p' sx={{margin:0, fontSize: '14px', lineHeight: '21px',color: 'rgba(51,48,60,0.87)',textAlign: 'left', marginBottom: '2px'}}>{cell.percent}</Typography>                
                        <CustomizedProgressBars mainColor={cell.mainColor} secondaryColor={cell.secondaryColor} progress={cell.percent}/>
                        </TableCell>
                        <TableCell align="right" sx={{fontSize:'14px',lineHeight: '21px',color: 'rgba(51,48,60,0.87)'}}>{cell.hours}</TableCell>
        
        
        
                      </TableRow>
                    ) 
                )): <TableRow>there is no data</TableRow>
            }
        
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
