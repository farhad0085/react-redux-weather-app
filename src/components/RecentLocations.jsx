import React, { useEffect, useState } from 'react'
import { getPreviousRecentLocations } from "../utils";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useDispatch } from "react-redux";
import { load_weather_data } from "../store/actions/weatherActions";


const RecentLocations = () => {
    const classes = useStyles();

    const [locations, setLocations] = useState([])

    useEffect(() => {
        setLocations(getPreviousRecentLocations())
    }, [])


    const LocationComponent = ({ locations }) => {
        return (
            <>
                {locations.map(location => {
                    return (
                        <div key={location} className={classes.root}>
                            <List component="nav" aria-label="recent locations">
                                <Location key={location} location={location} />
                            </List></div>
                    )

                })}
            </>
        )
    }


    return (
        <>
            <h1 className={classes.title}>Recent Searches</h1>
            <ul>
                {locations.length ? <LocationComponent locations={locations} /> : <Location location="No recent searches" />}
            </ul>
        </>
    )

}




const Location = ({ location }) => {

    const dispatch = useDispatch()

    const clickHandler = location => {
        if (location === "No recent searches") return false
        dispatch(load_weather_data(location))
    }

    return (
        <ListItem button>
            <ListItemIcon>
                <LocationOnIcon />
            </ListItemIcon>
            <ListItemText onClick={() => clickHandler(location)} primary={location} />
        </ListItem>
    );
}


export default RecentLocations



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'rgb(49, 44, 44)',
    },
}));