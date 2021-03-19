import { Avatar, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import { useForm } from 'react-hook-form';


const paperStyle = { padding: "30px 20px", width: 300, margin: "0 auto" }

const SignUp = ({handleChange}) => {


    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center">
                    <Avatar style={{ backgroundColor: "pink" }}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={{ margin: 0 }}>Sign Up</h2>
                    <Typography varient="caption" gutterBottom={true}>please fill this form to create a account!</Typography>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)} >

                    {/* 1) TextField */}
                    <TextField
                        style={{ marginBottom: 10 }}
                        placeholder="Enter Your Name"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name='name'
                        inputRef={register({
                            required: 'name is required.'
                        })}
                        error={Boolean(errors.name)}
                        helperText={errors.name?.message}
                    />

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

                    {/* 4) TextField */}
                    <TextField
                        style={{ marginBottom: 10 }}
                        placeholder="Confirm your password"
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name='confirmPassword'
                        inputRef={register({
                            required: "Confirm your password."
                        })}
                        error={Boolean(errors.confirmPassword)}
                        helperText={errors.confirmPassword?.message}
                    />



                    {/* Checkbox */}
                    <FormControl error={Boolean(errors?.termsAndConditions)}>
                        <FormControlLabel
                            style={{ display: "block" }}
                            label="I agree all terms and conditions"
                            control={<Checkbox
                                name='termsAndConditions'
                                inputRef={register({
                                    required: 'you mast agree terms and conditions'
                                })} />}
                        />
                        <FormHelperText>{errors.termsAndConditions?.message}</FormHelperText>
                    </FormControl>


                    <Button
                        style={{ marginTop: 20 }}
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.inputField}
                        fullWidth
                    >
                        Sign Up
                    </Button>

                    <Typography style={{ marginTop: 5 }}>
                        Already have an account?
                        <Link href="#" onClick={() => handleChange('event', 0)}>
                            Login
                        </Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    );
};

export default SignUp;