import "firebase/auth";
import firebase from "firebase/app";
import { UserContext } from "../../App";
import { useForm } from 'react-hook-form';
import React, { useContext } from 'react';
import { firebaseConfig } from "./firebase.config";
import { useHistory, useLocation } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import { Button, Checkbox, Divider, FormControl, FormControlLabel, FormHelperText, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const faFacebookIcon = <FontAwesomeIcon icon={faFacebook} size='2x' />
const faGoogleIcon = <FontAwesomeIcon icon={faGooglePlusG} size='2x' />


const paperStyle = { padding: "30px 20px", width: 320, margin: "0 auto" }

const SignUp = ({ handleChange }) => {
    const classes = useStyles();

    const [logedInUser, setLogedInUser] = useContext(UserContext);

    const { register, handleSubmit, getValues, errors } = useForm({
        mode: 'onChange',
    });


    const onSubmit = data => {
        console.log(data);
        console.log(errors);

        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                // var user = userCredential.user;

            })
            .catch((error) => {
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // ..
            });
    }




    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };




    const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
    const FacebookAuthProvider = new firebase.auth.FacebookAuthProvider();

    const handelSignin = (provider) => {

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const sigedinUser = { ...logedInUser, ...result.user };
                console.log(logedInUser);
                setLogedInUser(sigedinUser);
                history.replace(from);
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }




    return (
        <Grid>
            <Paper style={paperStyle}>
                <form onSubmit={handleSubmit(onSubmit)} >

                    {/* 1) TextField */}
                    <TextField
                        style={{ marginBottom: 10 }}
                        placeholder="Enter Your Name"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name='displayName'
                        inputRef={register({
                            required: 'Name is required.',
                            pattern: {
                                value: /^([\w]{3,})+\s+([\w\s]{3,})+$/i,
                                message: 'first and last name should 3 characters'
                            },
                        })}
                        error={Boolean(errors.displayName)}
                        helperText={errors.displayName?.message}
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
                            required: 'email is required.',
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: 'Please enter a valid email address.'
                            },
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
                            required: 'Password required.',
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/,
                                message: ' Password (1 UpperCase, 1 LowerCase, 1 Number/SpecialChar and Min 4 characters)'
                            },
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
                            required: "Confirm your password.",
                            validate: value => value === getValues('password') || "Password doesn't match." 
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
                <Divider />
                <Button variant="contained" onClick={() => handelSignin(GoogleAuthProvider)} fullWidth style={{ marginTop: 5 }}> {faGoogleIcon} Log in with google</Button>
                <Button variant="contained" onClick={() => handelSignin(FacebookAuthProvider)} fullWidth style={{ marginTop: 5 }}> {faFacebookIcon} Log in with facebook</Button>
            </Paper>
        </Grid>
    );
};

export default SignUp;