import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import HomeRoundIcon from "@material-ui/icons/HomeRounded";
import { useDispatch, useSelector } from "react-redux";
import * as Types from '../store/actions/actionTypes'

export default function BottomNav() {
    const value = useSelector(state => state.weather.bottomNavNumber)
    const dispatch = useDispatch()

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                dispatch({type: Types.SET_BOTTOM_NAV_NUMBER, payload: newValue});
            }}
            showLabels
        >
            <BottomNavigationAction label="Home" icon={<HomeRoundIcon />} />
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        </BottomNavigation>
    );
}
