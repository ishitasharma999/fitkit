import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, Button, Typography } from "@mui/material";
import { getExercises, deleteExercise, errorMessages } from "../api";

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
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const formatDate = (iso) => new Date(iso).toLocaleDateString('en-GB');

const Dashboard = () => {
    const [rows, setRows] = useState([]);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const load = () => {
        setLoading(true);
        getExercises()
            .then((data) => { setRows(data); setErrors([]); })
            .catch((err) => setErrors(errorMessages(err)))
            .finally(() => setLoading(false));
    };

    useEffect(load, []);

    const onDelete = async (id) => {
        try {
            await deleteExercise(id);
            setRows((prev) => prev.filter((r) => r._id !== id));
        } catch (err) {
            setErrors(errorMessages(err));
        }
    };

    const totalMinutes = rows.reduce((sum, r) => sum + r.duration, 0);

    return (
        <div className="App" style={{marginTop:"30px", maxWidth:"100%", padding: "0 24px"}}>
            <Typography variant="h6" color="white" className="blur" style={{paddingBottom: 10}}>
                {loading ? "Loading..." : `${rows.length} record${rows.length === 1 ? "" : "s"} · ${totalMinutes} minutes total`}
            </Typography>
            {errors.map((msg) => <Alert key={msg} severity="error">{msg}</Alert>)}
            <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="activity table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User</StyledTableCell>
            <StyledTableCell align="right">Activity</StyledTableCell>
            <StyledTableCell align="right">Duration&nbsp;(mins)</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!loading && rows.length === 0 && (
            <StyledTableRow>
              <StyledTableCell colSpan={5} align="center">No activities recorded yet.</StyledTableCell>
            </StyledTableRow>
          )}
          {rows.map((r) => (
            <StyledTableRow key={r._id}>
              <StyledTableCell component="th" scope="row">{r.username}</StyledTableCell>
              <StyledTableCell align="right">{r.activity}</StyledTableCell>
              <StyledTableCell align="right">{r.duration}</StyledTableCell>
              <StyledTableCell align="right">{formatDate(r.date)}</StyledTableCell>
              <StyledTableCell align="right">
                <Button size="small" style={{color:"#FF3366"}} onClick={() => onDelete(r._id)}>DELETE</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
            Copyright © Fitkit 2023.
       </div>
    );
}

export default Dashboard;
