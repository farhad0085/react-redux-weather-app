import * as Types from '../actions/actionTypes'

const initialState = {
    loading: false,
    weather: {},
    error: "",
    bottomNavNumber: 0
}

function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case Types.SET_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        case Types.WEATHER_DATA_LOADED: {
            return {
                ...state,
                error: "",
                weather: action.payload,
                bottomNavNumber: 0
            }
        }
        case Types.SET_ERRORS: {
            return {
                ...state,
                weather: {},
                error: action.payload
            }
        }
        case Types.SET_BOTTOM_NAV_NUMBER: {
            return {
                ...state,
                bottomNavNumber: action.payload
            }
        }
        default: return state
    }
}

export default weatherReducer