import "firebase/auth";
import React from 'react';
import { useContext } from 'react';
import firebase from "firebase/app";
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import { firebaseConfig } from "./firebase.config";
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import { Button, Checkbox, Divider, FormControl, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const faFacebookIcon = <FontAwesomeIcon icon={faFacebook} size='2x' />
const faGoogleIcon = <FontAwesomeIcon icon={faGooglePlusG} size='2x' />


const paperStyle = { padding: "30px 20px", width: 320, margin: "0 auto" }

const SignIn = ({ handleChange }) => {
    const classes = useStyles();

    const [logedInUser, setLogedInUser] = useContext(UserContext);

    const { register, handleSubmit, errors } = useForm({
        mode:'onChange',
    });

    const onSubmit = data => {
        console.log(data);
        console.log(errors);

        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                const sigedinUser = { ...logedInUser, ...user };
                setLogedInUser(sigedinUser);
                history.replace(from);
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
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
                setLogedInUser(sigedinUser);
                history.replace(from);
                console.log(logedInUser);
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }



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
                <Button variant="contained" onClick={() => handelSignin(GoogleAuthProvider)} fullWidth style={{ marginTop: 5 }}> {faGoogleIcon} Log in with google</Button>
                <Button variant="contained" onClick={() => handelSignin(FacebookAuthProvider)} fullWidth style={{ marginTop: 5 }}> {faFacebookIcon} Log in with facebook</Button>
            </Paper>
        </Grid>
    );
};

export default SignIn;