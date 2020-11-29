import React from 'react'
import Controller from './components/Controller'
import WeatherInfo from './components/WeatherInfo'
import { Container } from '@material-ui/core'
import BottomNav from './components/BottomNav'
import TopNavBar from './components/TopNavBar'
import RecentLocations from './components/RecentLocations'
import './App.css'
import { useSelector } from "react-redux";


const App = () => {

    const bottomNavNumber = useSelector(state => state.weather.bottomNavNumber)

    return (
        <Container maxWidth="md">
            <TopNavBar />
            <br />
            <Controller />
            <br />
            {bottomNavNumber === 0 ? (
                <div className="weather-info">
                    <WeatherInfo />
                </div>
            ) : (
                    <div className="weather-info">
                        <RecentLocations />
                    </div>
                )}
            <BottomNav />
        </Container>
    )

}


export default App