import Map from '../Map/Map';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

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






    const { register, handleSubmit, errors } = useForm();
    // console.log(logedInUser);

    const onSubmit = data => {
        console.log(data);
        const newBoxStyle = { ...serchBoxStyle }
        newBoxStyle.display = false;
        setSerchBoxStyle(newBoxStyle)
    }





    return (
        <div className='d-md-flex'>
            <div className="col-md-4 py-5">
                <Grid >
                    <Paper style={paperStyle}>
                        {
                            serchBoxStyle.display ?
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
                                </form> :
                                <Box>
                                    <Box boxShadow={3} style={{ margin: '10px 0px' }}><img src={vehicle?.photoURL} alt="" style={{ width: 50 }} /><Typography style={{ display: 'inline-block', margin: '0px 5px' }}>{vehicle?.name || "vehicle no't select"}</Typography><SupervisorAccountIcon /><Typography style={{ display: 'inline-block', margin: '0px 5px' }}>4</Typography><Typography style={{ display: 'inline-block', marginLeft: '120px' }}>$64</Typography></Box>
                                    <Box boxShadow={3} style={{ margin: '10px 0px' }}><img src={vehicle?.photoURL} alt="" style={{ width: 50 }} /><Typography style={{ display: 'inline-block', margin: '0px 5px' }}>{vehicle?.name || "vehicle no't select"}</Typography><SupervisorAccountIcon /><Typography style={{ display: 'inline-block', margin: '0px 5px' }}>4</Typography><Typography style={{ display: 'inline-block', marginLeft: '120px' }}>$64</Typography></Box>
                                    <Box boxShadow={3} style={{ margin: '10px 0px' }}><img src={vehicle?.photoURL} alt="" style={{ width: 50 }} /><Typography style={{ display: 'inline-block', margin: '0px 5px' }}>{vehicle?.name || "vehicle no't select"}</Typography><SupervisorAccountIcon /><Typography style={{ display: 'inline-block', margin: '0px 5px' }}>4</Typography><Typography style={{ display: 'inline-block', marginLeft: '120px' }}>$64</Typography></Box>
                                    <Box boxShadow={3} style={{ margin: '10px 0px' }}><img src={vehicle?.photoURL} alt="" style={{ width: 50 }} /><Typography style={{ display: 'inline-block', margin: '0px 5px' }}>{vehicle?.name || "vehicle no't select"}</Typography><SupervisorAccountIcon /><Typography style={{ display: 'inline-block', margin: '0px 5px' }}>4</Typography><Typography style={{ display: 'inline-block', marginLeft: '120px' }}>$64</Typography></Box>
                                </Box>
                        }
                    </Paper>
                </Grid>
            </div>
            <div className="col-md-8 pt-3" style={{ maxWidth: "1200px" }}>
                <Map />
            </div>
        </div>

    );
};

export default Destination;