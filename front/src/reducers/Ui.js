import {
    SET_RESULT_BACKGROUND
} from '../actions/index';

import store from 'store';

const INIT_STATE = {
    resultBackground: store.get('result_background'),
};

export default function counter(state = INIT_STATE, action) {

    switch (action.type) {
        case SET_RESULT_BACKGROUND: {
            store.set('result_background', action.payload)
            return {
                ...state,
                resultBackground: action.payload,
            }
        }
        
        default:
            return state;
    }
}