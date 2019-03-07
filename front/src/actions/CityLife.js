import {
    INIT_CITYLIFE,
    SET_CURRENT_CITY,
    SET_STEP,
    SET_ANNUAL_SALARY,
    SET_TARGET_CITY,
} from './index';

export const initCityLife = () => {
    return {
        type: INIT_CITYLIFE,
    };
};

export const setStep = (step) => {
    return {
        type: SET_STEP,
        payload: step,
    };
};


export const setCurrentCity = (city) => {
    return {
        type: SET_CURRENT_CITY,
        payload: city,
    };
};

export const setAnnualSalary = (salary) => {
    return {
        type: SET_ANNUAL_SALARY,
        payload: salary,
    };
};

export const setTargetCity = (city) => {
    return {
        type: SET_TARGET_CITY,
        payload: city,
    };
};

