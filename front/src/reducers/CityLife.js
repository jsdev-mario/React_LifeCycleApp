import {
    INIT_CITYLIFE,
    SET_CURRENT_CITY,
    SET_STEP,
    SET_ANNUAL_SALARY,
    SET_TARGET_CITY
} from '../actions';

import store from 'store';

const INIT_STATE = {
    step: store.get('step') || 1,
    currentCity: store.get('current_city'),
    salary: store.get('salary') || 0,
    targetCity: store.get('target_city'),
};

export default function counter(state = INIT_STATE, action) {

    switch (action.type) {

        case INIT_CITYLIFE: {
            store.remove('current_city');
            store.remove('step');
            store.remove('salary');
            store.remove('target_city');
            return {
                step: 1,
                currentCity: null,
                salary: 0,
                targetCity: null,
            }
        }

        case SET_CURRENT_CITY: {
            store.set('current_city', action.payload);
            return {
                ...state,
                currentCity: action.payload,
            }
        }

        case SET_STEP: {
            store.set('step', action.payload);
            return {
                ...state,
                step: action.payload,
            }
        }

        case SET_ANNUAL_SALARY: {
            store.set('salary', action.payload);
            return {
                ...state,
                salary: action.payload,
            }
        }

        case SET_TARGET_CITY: {
            store.set('target_city', action.payload);
            return {
                ...state,
                targetCity: action.payload,
            }
        }

        default:
            return state;
    }
}