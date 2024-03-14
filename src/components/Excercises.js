import React from "react";
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const currencies = [
  {
    value: 'USD',
    label: 'stretching',
  },
  {
    value: 'EUR',
    label: 'running',
  },
  {
    value: 'BTC',
    label: 'walking',
  },
  {
    value: 'JPY',
    label: 'cycling',
  },
];

const Excercises =() => {
    return (
        <div className="App" id="Excercises">
            <Paper elevation={10} id="user_page" 
            style={{
              //  margin: '20px', 
            marginTop: '30px',
             marginLeft: '50px',
              marginRight: '50px',
             backgroundColor: 'rgba(255, 255, 255, 0.8'}}
            >
                <div style={{padding:"50px", textAlign: 'center'}}>

                    <Typography variant="h5" gutterBottom color="primary"
                        style={{fontWeight:"bold", textAlign:"center"}}
                    >
                    RECORD FITNESS ACTIVITY
                    </Typography>

                    <TextField id="standard-basic" label="Enter Username *" variant="standard" fullWidth
                        style={{display: 'block', textAlign: "start"}} />
                    <TextField id="standard-basic" label="Enter the acitivity's name *" variant="standard" fullWidth
                        style={{display: 'block', textAlign: 'start'}} />

<TextField
          id="standard-select-currency"
          select
          label="Select"
          defaultValue="walk"
          helperText="Select acitvity name"
          variant="standard"
          fullWidth 
          margin="dense"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
</TextField>

                    <TextField id="standard-basic" label="Enter duration(in minutes) *" variant="standard" fullWidth
                        style={{display: 'block', textAlign: 'start', marginBottom:"40px"}} />
                    
   
                   
      

                    <Button variant="contained" size="large"  color="secondary"
                        style={{paddingTop:'5px'}} >
                    ADD RECORD
                    </Button>

                </div>
            </Paper>
            <br/>
            Copyright © Fitkit 2023.
        </div>
    );
}

export default Excercises;

