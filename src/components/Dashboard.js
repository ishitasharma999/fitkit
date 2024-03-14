import React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { colors } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  

const Dashboard =() => {
    return (
        <div className="App"
             style={{marginTop:"50px", 
            maxWidth:"100%"}}>
            <TableContainer component={Paper} >
                
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Users</StyledTableCell>
            <StyledTableCell align="right">Activity</StyledTableCell>
            <StyledTableCell align="right">Duration&nbsp;(mins)</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
              Sample user 1
              </StyledTableCell>
              <StyledTableCell align="right">Running</StyledTableCell>
              <StyledTableCell align="right">50</StyledTableCell>
              <StyledTableCell align="right">01/01/2023</StyledTableCell>
              <StyledTableCell align="right" style={{color:"#FF3366"}}>DELETE</StyledTableCell>
            </StyledTableRow>
         
        </TableBody>
      </Table>
      
    </TableContainer>
    <br/>
            Copyright © Fitkit 2023.
       </div>
    );
}

export default Dashboard;

