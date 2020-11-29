import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



export default function NestedGrid({ location, feels_like, humidity, pressure, temp, temp_max, temp_min }) {
    const classes = useStyles();

    function FormRow({ itemTitle1, item1, itemTitle2, item2, itemTitle3, item3 }) {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <h1 className={classes.title}>{itemTitle1}</h1>
                        <h1>{item1}</h1>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <h1 className={classes.title}>{itemTitle2}</h1>
                        <h1>{item2}</h1>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <h1 className={classes.title}>{itemTitle3}</h1>
                        <h1>{item3}</h1>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Weather information for <span className={classes.location}>{location}</span></h1>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow
                        itemTitle1="Humidity"
                        item1={humidity}
                        itemTitle2="Temperature"
                        item2={temp}
                        itemTitle3="Pressure"
                        item3={pressure}
                    />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow
                        itemTitle1="Feels Like"
                        item1={feels_like}
                        itemTitle2="Highest"
                        item2={temp_max}
                        itemTitle3="Lowest"
                        item3={temp_min}
                    />
                </Grid>
            </Grid>
        </div>
    );
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'rgb(49, 44, 44)',
    },
    location: {
        color: 'rgb(22, 126, 27)',
    }
}));