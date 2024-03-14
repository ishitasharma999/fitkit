import React from "react";
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material'

const User =() => {
    return (
        <div className="App" id="User">
            <Paper elevation={10} id="user_page" 
            style={{ margin: '20px', marginTop: '50px', marginLeft: '100px', marginRight: '100px', backgroundColor: 'rgba(255, 255, 255, 0.8'}}>
                <div style={{padding:"50px", textAlign: 'center'}}>

                    <Typography variant="h4" gutterBottom color="primary"
                        style={{fontWeight:"bold", textAlign:"center"}}
                    >
                    Create User
                    </Typography>

                    <TextField id="standard-basic" label="Enter Username *" variant="standard" fullWidth
                        style={{display: 'block', textAlign: "start"}} />
                    <TextField id="standard-basic" label="Enter Email ID *" variant="standard" fullWidth
                        style={{display: 'block', textAlign: 'start'}} />
                    <TextField id="standard-basic" label="Enter Password *" variant="standard" fullWidth
                        style={{display: 'block', textAlign: 'start', marginBottom:"40px"}} />
                    <Button variant="contained" size="large"  color="secondary"
                        style={{paddingTop:'5px'}} >
                    CREATE USER
                    </Button>

                </div>
            </Paper>
            Copyright © Fitkit 2023.
        </div>
    );
}

export default User;