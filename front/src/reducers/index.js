import { combineReducers } from 'redux';
import User from './User';
import Ui from './Ui';
import CityLife from './CityLife';


const reducers = combineReducers ({
    user: User,
    ui: Ui,
    citylife: CityLife,
});

export default reducers;
