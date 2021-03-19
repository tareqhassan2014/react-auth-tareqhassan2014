import { Avatar, Button, Checkbox, FormControl, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import LockIcon from '@material-ui/icons/Lock';
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import { useForm } from 'react-hook-form';


const paperStyle = { padding: "30px 20px", width: 300, margin: "0 auto" }

const SignIn = ({ handleChange }) => {


    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center">
                    <Avatar style={{ backgroundColor: "pink" }}>
                        <LockIcon />
                    </Avatar>
                    <h2 style={{ margin: 0 }}>Sign In</h2>
                    <Typography varient="caption" gutterBottom={true}>please fill this form to Sign In.</Typography>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)} >

                    {/* 2) TextField */}
                    <TextField
                        style={{ marginBottom: 10 }}
                        placeholder="Enter Your E-mail Address"
                        label="E-mail"
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name='email'
                        inputRef={register({
                            required: 'email is required.'
                        })}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                    />

                    {/* 3) TextField */}
                    <TextField
                        style={{ marginBottom: 10 }}
                        placeholder="Enter Your Password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name='password'
                        inputRef={register({
                            required: 'password is required.'
                        })}
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                    />

                    {/* Checkbox */}
                    <FormControl>
                        <FormControlLabel
                            style={{ display: "block" }}
                            label="remember me"
                            control={<Checkbox
                                name='rememberMe'
                            />}
                        />
                    </FormControl>

                    <Typography>
                        <Link href="#">
                            forgate password
                        </Link>
                    </Typography>

                    <Button
                        style={{ marginTop: 20 }}
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.inputField}
                        fullWidth
                    >
                        Sign In
                    </Button>


                    <Typography style={{ marginTop: 5 }}>
                        Don't have a account ?
                        <Link href="#" onClick={() => handleChange('event', 1)}>
                            create account
                        </Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    );
};

export default SignIn;