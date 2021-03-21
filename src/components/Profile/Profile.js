import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function Profile() {
    const classes = useStyles();
    const [logedInUser] = useContext(UserContext);
    const { displayName, photoURL, email } = logedInUser;

    const history = useHistory()

    const handleButtonClick = pageURL => {
        history.push(pageURL);
      };

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={photoURL}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {displayName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {email}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button  onClick={() => handleButtonClick("/")} size="small" color="primary">
                    Home
                </Button>
                <Button  onClick={() => handleButtonClick("/destination")} size="small" color="primary">
                    DESTINATION
                </Button>
            </CardActions>
        </Card>
    );
}