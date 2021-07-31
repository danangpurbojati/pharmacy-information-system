import React from 'react'
import { Button, Card, CardContent, Container, TextField, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    const submitLoginForm = (event) => {
        event.preventDefault();
        history.push("/admin");
    }
    return (
        <Container 
            maxWidth="xs"
            style={{
                display: 'flex',
                minHeight: '100vh',
                alignItems: 'center',
                justifyContent: 'center'
            }}    
        >
            <Card>
                <CardContent>
                    <Typography variant="h5" align="center" gutterBottom>
                        Pharmacy System
                    </Typography>
                    <Typography variant="h4" align="center" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={submitLoginForm}>
                        <TextField 
                            fullWidth
                            variant="outlined"
                            label="username"
                            style={{marginBottom: 16}}
                        />
                        <TextField 
                            fullWidth
                            variant="outlined"
                            label="password"
                            style={{marginBottom: 16}}
                        />
                        <Button type="submit" fullWidth variant="contained" color="primary">Login</Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Login
