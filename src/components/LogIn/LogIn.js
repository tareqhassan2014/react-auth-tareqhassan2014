import React from "react";
import hero from "../../Photo/3.svg";
import { makeStyles } from "@material-ui/core/styles";
import {
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    FormControl,
    FormHelperText,
} from "@material-ui/core";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    inputField: {
        width: "100%",
        margin: theme.spacing(1, 0),
    },
}));

const LogIn = () => {
    const classes = useStyles();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className="box">
            <div className="box-primary">
                <img src={hero} height="300px" alt="" />
            </div>
            <div className="box-secondary">
                <form onSubmit={handleSubmit(onSubmit)} >

                    {/* 1) TextField */}
                    <TextField
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
                        placeholder="Enter Your Phone Number"
                        label="Phone"
                        variant="outlined"
                        fullWidth
                        className={classes.inputField}
                        name='phone'
                        inputRef={register}
                    />

                    {/* Checkbox */}
                    <FormControl error={Boolean(errors?.termsAndConditions)}>
                        <FormControlLabel
                            style={{ display: "block", marginBottom: 15 }}
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
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.inputField}
                    >
                        create new account
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default LogIn;