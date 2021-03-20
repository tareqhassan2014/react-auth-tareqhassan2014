import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Paper, TextField } from "@material-ui/core";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";

const paperStyle = { padding: "30px 20px", width: 340 }



const Destination = () => {
    const classes = useStyles();
    const { id } = useParams();


    const [transport, setTransport] = useState([])

    useEffect(() => {
        fetch("https://api.mocki.io/v1/dab62bd5")
            .then(res => res.json())
            .then(data => setTransport(data))
    }, [])

    // eslint-disable-next-line eqeqeq
    const vehicle = transport.find(vehicle => vehicle.id == id)



    const [serchBoxStyle, setSerchBoxStyle] = useState({
        display: true
    })

    console.log(serchBoxStyle.display);

    const { register, handleSubmit, errors } = useForm();
    // console.log(logedInUser);


    const onSubmit = data => {
        console.log(data);
        // console.log(errors);
        const newBoxStyle = { ...serchBoxStyle }
        newBoxStyle.display = false;
        setSerchBoxStyle(newBoxStyle)

    }





    return (
        <div className='d-flex'>
            <div>
                <Grid >
                    <Paper style={paperStyle}>
                        <Box component="span" display={serchBoxStyle.display && 'block'}>
                            <form onSubmit={handleSubmit(onSubmit)} >

                                <TextField
                                    style={{ marginBottom: 10 }}
                                    placeholder="Where you want to start"
                                    label="Pick From"
                                    fullWidth
                                    className={classes.inputField}
                                    name='from'
                                    inputRef={register({
                                        required: 'Please fill up'
                                    })}
                                    error={Boolean(errors.from)}
                                    helperText={errors.from?.message}
                                />

                                <TextField
                                    style={{ marginBottom: 10 }}
                                    placeholder="Where You want to go"
                                    label="Pick to"
                                    fullWidth
                                    className={classes.inputField}
                                    name='to'
                                    inputRef={register({
                                        required: 'Please fill up'
                                    })}
                                    error={Boolean(errors.to)}
                                    helperText={errors.to?.message}
                                />


                                <Button
                                    style={{ marginTop: 20 }}
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    className={classes.inputField}
                                    fullWidth
                                >
                                    Search
                                </Button>
                            </form>
                        </Box>
                    </Paper>
                </Grid>
            </div>
            <div>
                <img src="https://i.ibb.co/ggRdB0C/Map.png" alt="" />
            </div>
        </div>

    );
};

export default Destination;