import React from 'react';
import { Container, Grid, Paper, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { authSignup } from '../service/api';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
const LoginPage = () => {
    const navigate = useNavigate();
    const {  setUser } = useContext(DataContext);
    const [signup, setsignup] = useState({
        username: '',
        email: '',
        password: ''

    })
    const handlechange = (e) => {
        setsignup({
            ...signup,
            [e.target.name]: e.target.value
        })
        console.log(signup)
    }
    const sendRequest = async () => {
        let response = await authSignup(signup)
        console.log(response)
        setUser(signup.username)
        navigate('/send')


    }
     
         






    return (
        <Container maxWidth="xs">
            <Paper sx={{ padding: 4, marginTop: 8 }}>
                <Grid container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center">
                            Login
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField onChange={handlechange} name="username" fullWidth variant="outlined" label="Username" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField onChange={handlechange} name="email" fullWidth variant="outlined" label="Email" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField onChange={handlechange} name="password" fullWidth variant="outlined" label="Password" type="password" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={sendRequest} fullWidth variant="contained" color="primary" size="large">
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" align="center">
                            Don't have an account? Sign up
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default LoginPage;
