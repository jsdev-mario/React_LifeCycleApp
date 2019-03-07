import {
    SET_RESULT_BACKGROUND
} from './index';

export const setResultBackground = (photo) => {
    return {
        type: SET_RESULT_BACKGROUND,
        payload: photo,
    };
};