import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import { Typography, Alert, Button, TextField } from "@mui/material";
import { createUser, errorMessages } from "../api";

const emptyForm = { username: "", email: "", password: "" };

const User = () => {
    const [form, setForm] = useState(emptyForm);
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState("");
    const [busy, setBusy] = useState(false);

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        setSuccess("");
        setBusy(true);
        try {
            const user = await createUser(form);
            setSuccess(`User "${user.username}" created. You can now record activities for them.`);
            setForm(emptyForm);
        } catch (err) {
            setErrors(errorMessages(err));
        } finally {
            setBusy(false);
        }
    };

    return (
        <div className="App" id="User">
            <Paper elevation={10} id="user_page"
            style={{ margin: '20px', marginTop: '50px', marginLeft: '100px', marginRight: '100px', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
                <form onSubmit={onSubmit} style={{padding:"50px", textAlign: 'center'}}>

                    <Typography variant="h4" gutterBottom color="primary"
                        style={{fontWeight:"bold", textAlign:"center"}}
                    >
                    Create User
                    </Typography>

                    <TextField name="username" value={form.username} onChange={onChange} required
                        label="Enter Username" variant="standard" fullWidth
                        style={{display: 'block', textAlign: "start"}} />
                    <TextField name="email" type="email" value={form.email} onChange={onChange} required
                        label="Enter Email ID" variant="standard" fullWidth
                        style={{display: 'block', textAlign: 'start'}} />
                    <TextField name="password" type="password" value={form.password} onChange={onChange} required
                        label="Enter Password" variant="standard" fullWidth
                        style={{display: 'block', textAlign: 'start', marginBottom:"40px"}} />

                    {errors.map((msg) => <Alert key={msg} severity="error" style={{marginBottom: 10}}>{msg}</Alert>)}
                    {success && <Alert severity="success" style={{marginBottom: 10}}>{success}</Alert>}

                    <Button type="submit" variant="contained" size="large" color="secondary" disabled={busy}
                        style={{paddingTop:'5px'}} >
                    {busy ? "CREATING..." : "CREATE USER"}
                    </Button>

                </form>
            </Paper>
            Copyright © Fitkit 2023.
        </div>
    );
}

export default User;
