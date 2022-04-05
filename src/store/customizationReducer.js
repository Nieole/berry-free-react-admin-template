// project imports
import config from 'config';
import localforage from 'localforage';
// action - state management
import * as actionTypes from './actions';

export const initialState = {
    isOpen: [], // for active default menu
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true,
    isLogin: false,
    token: null
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action) => {
    let id;
    switch (action.type) {
        case actionTypes.MENU_OPEN:
            id = action.id;
            return {
                ...state,
                isOpen: [id]
            };
        case actionTypes.SET_MENU:
            return {
                ...state,
                opened: action.opened
            };
        case actionTypes.SET_FONT_FAMILY:
            return {
                ...state,
                fontFamily: action.fontFamily
            };
        case actionTypes.SET_BORDER_RADIUS:
            return {
                ...state,
                borderRadius: action.borderRadius
            };
        case actionTypes.LOGIN:
            localforage.setItem('token', action.payload);
            return {
                ...state,
                isLogin: true,
                token: action.payload
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLogin: false
            };
        default:
            return state;
    }
};

export default customizationReducer;
