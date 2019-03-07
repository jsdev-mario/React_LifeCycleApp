import {
    SIGNIN_USER_SUCCESS,
    SIGNOUT_USER_SUCCESS,
    SIGNUP_USER_SUCCESS,
} from './index';



export const userSignUpSuccess = (authUser) => {
    return {
        type: SIGNUP_USER_SUCCESS,
        payload: authUser,
    };
};

export const userSignInSuccess = (authUser) => {
    return {
        type: SIGNIN_USER_SUCCESS,
        payload: authUser
    }
};

export const userSignOutSuccess = () => {
    return {
        type: SIGNOUT_USER_SUCCESS,
    }
};