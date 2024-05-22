import { useState } from "react";
import { Container, Box, TextField, Typography, Button, CssBaseline, Grid, FormControlLabel, Link, Checkbox, Avatar, InputAdornment, IconButton } from "@mui/material";
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <>
            <Container 
                component="main" 
                maxWidth='false' // Extend the container to the full width
                disableGutters // Remove padding around the container
                sx={{
                    backgroundImage: 'url(https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg)', // Background image option
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh', // Ensure it covers the whole viewport height
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <CssBaseline />
                <Box 
                    sx={{
                        maxWidth: 500,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                        padding: 5,
                        borderRadius: 2,
                        boxShadow: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        
                    }}
                >
                    <Avatar sx={{ bgcolor: 'green' }}>
                        <PersonAddAltRoundedIcon />
                    </Avatar>
                    <Typography variant='h5' sx={{ p: 1, textAlign: 'center' }}>Sign up</Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid> 
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>   
                            <Grid item xs={12}>
                                <TextField 
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    autoComplete="new-password"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel 
                                    control={<Checkbox value="allowExtraEmails" color="primary" />} 
                                    label="All information is correct."
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button 
                                    type="submit"
                                    fullWidth
                                    variant="contained">
                                    Sign Up
                                </Button>
                            </Grid>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
