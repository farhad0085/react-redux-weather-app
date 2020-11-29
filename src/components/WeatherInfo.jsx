import React from 'react'
import { useSelector } from "react-redux";
import WeatherGrid from './WeatherGrid'
import { makeStyles } from '@material-ui/core/styles';
import Loading from './Loading'

const WeatherInfo = () => {

    const classes = useStyles();

    const { weather, error, loading } = useSelector(state => state.weather)

    return (
        <div>
            { error ? <h1 className={classes.errorTitle}>{error}</h1> : (
                <>
                    { loading ? <div className={classes.center}><Loading /></div> : (
                        <>
                            {Object.keys(weather).length ? (
                                <WeatherGrid
                                    location={weather.name}
                                    humidity={weather.main.humidity}
                                    pressure={weather.main.pressure}
                                    temp={(weather.main.temp - 273).toFixed(2)}
                                    feels_like={(weather.main.feels_like - 273).toFixed(2)}
                                    temp_max={(weather.main.temp_max - 273).toFixed(2)}
                                    temp_min={(weather.main.temp_min - 273).toFixed(2)}
                                />
                            ) : (
                                    <h1 className={classes.title}>Enter city name to view weather information</h1>
                                )}
                        </>
                    )}

                </>
            )}

        </div>
    )

}


export default WeatherInfo



const useStyles = makeStyles((theme) => ({

    title: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'rgb(59, 54, 54)',
    },
    errorTitle: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'rgb(245, 54, 54)',
    },
    center: {
        padding: theme.spacing(1),
        textAlign: 'center',
    }

}));