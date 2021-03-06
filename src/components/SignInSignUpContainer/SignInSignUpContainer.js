import React from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Grid>{children}</Grid>
                </Box>
            )}
        </div>
    );
}


const SignInSignUpContainer = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <Paper elevation={20} style={{ width: 320, margin: '20px auto' }}>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="SignIn" />
                <Tab label="SignUp" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <SignIn handleChange={handleChange} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignUp handleChange={handleChange} />
            </TabPanel>
        </Paper>
    );
};

export default SignInSignUpContainer;