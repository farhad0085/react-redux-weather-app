import React, { useState } from 'react'
import { load_weather_data } from "../store/actions/weatherActions";
import { useDispatch } from "react-redux";
import { TextField } from '@material-ui/core'

const Controller = () => {

    const [location, setLocation] = useState("")
    const dispatch = useDispatch()

    const submitHandler = e => {
        e.preventDefault()
        setLocation("")
        dispatch(load_weather_data(location))

    }

    return (
        <form autoComplete="off" onSubmit={submitHandler}>
            <TextField
                onChange={e => setLocation(e.target.value)}
                label="Location"
                value={location}
                placeholder="City name"
                fullWidth
                type="search"
                color="primary"
            />
        </form>
    )

}


export default Controller