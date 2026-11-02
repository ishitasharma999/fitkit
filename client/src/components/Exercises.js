import React, { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import { Typography, Alert, Button, TextField, MenuItem } from "@mui/material";
import { createExercise, getUsers, errorMessages } from "../api";

const activities = ['stretching', 'running', 'walking', 'cycling', 'yoga', 'weights', 'swimming'];

const today = () => new Date().toISOString().slice(0, 10);
const emptyForm = { username: "", activity: "running", duration: "", date: today() };

const Exercises = () => {
    const [form, setForm] = useState(emptyForm);
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState("");
    const [busy, setBusy] = useState(false);

    useEffect(() => {
        getUsers().then(setUsers).catch(() => setUsers([]));
    }, []);

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        setSuccess("");
        setBusy(true);
        try {
            const rec = await createExercise({ ...form, duration: Number(form.duration) });
            setSuccess(`Recorded ${rec.duration} min of ${rec.activity} for ${rec.username}.`);
            setForm({ ...emptyForm, username: form.username });
        } catch (err) {
            setErrors(errorMessages(err));
        } finally {
            setBusy(false);
        }
    };

    return (
        <div className="App" id="Excercises">
            <Paper elevation={10} id="user_page"
            style={{ marginTop: '30px', marginLeft: '50px', marginRight: '50px', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}
            >
                <form onSubmit={onSubmit} style={{padding:"50px", textAlign: 'center'}}>

                    <Typography variant="h5" gutterBottom color="primary"
                        style={{fontWeight:"bold", textAlign:"center"}}
                    >
                    RECORD FITNESS ACTIVITY
                    </Typography>

                    <TextField name="username" select value={form.username} onChange={onChange} required
                        label="User" variant="standard" fullWidth margin="dense"
                        helperText={users.length ? "Pick who did the activity" : "No users yet — create one on the User page"}
                        style={{textAlign: 'start'}}>
                        {users.map((u) => <MenuItem key={u._id} value={u.username}>{u.username}</MenuItem>)}
                    </TextField>

                    <TextField name="activity" select value={form.activity} onChange={onChange} required
                        label="Activity" variant="standard" fullWidth margin="dense"
                        style={{textAlign: 'start'}}>
                        {activities.map((a) => <MenuItem key={a} value={a}>{a}</MenuItem>)}
                    </TextField>

                    <TextField name="duration" type="number" value={form.duration} onChange={onChange} required
                        inputProps={{ min: 1 }} label="Duration (minutes)" variant="standard" fullWidth margin="dense"
                        style={{display: 'block', textAlign: 'start'}} />

                    <TextField name="date" type="date" value={form.date} onChange={onChange} required
                        label="Date" variant="standard" fullWidth margin="dense" InputLabelProps={{ shrink: true }}
                        style={{display: 'block', textAlign: 'start', marginBottom:"40px"}} />

                    {errors.map((msg) => <Alert key={msg} severity="error" style={{marginBottom: 10}}>{msg}</Alert>)}
                    {success && <Alert severity="success" style={{marginBottom: 10}}>{success}</Alert>}

                    <Button type="submit" variant="contained" size="large" color="secondary" disabled={busy}
                        style={{paddingTop:'5px'}} >
                    {busy ? "SAVING..." : "ADD RECORD"}
                    </Button>

                </form>
            </Paper>
            <br/>
            Copyright © Fitkit 2023.
        </div>
    );
}

export default Exercises;
