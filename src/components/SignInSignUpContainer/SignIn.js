import { Button, Checkbox, Divider, FormControl, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

const faFacebookIcon = <FontAwesomeIcon icon={faFacebook} size='2x' />
const faGoogleIcon = <FontAwesomeIcon icon={faGooglePlusG} size='2x' />
const paperStyle = { padding: "30px 20px", width: 300, margin: "0 auto" }

const SignIn = ({ handleChange }) => {


    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <Grid>
            <Paper style={paperStyle}>
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
                <Divider />
                <Button variant="contained" fullWidth style={{ marginTop: 5 }}> {faGoogleIcon} Log in with google</Button>
                <Button variant="contained" fullWidth style={{ marginTop: 5 }}> {faFacebookIcon} Log in with facebook</Button>
            </Paper>
        </Grid>
    );
};

export default SignIn;