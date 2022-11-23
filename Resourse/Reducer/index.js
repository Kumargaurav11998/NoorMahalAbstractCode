import { combineReducers } from "redux";
import {LoginReducer} from '../Reducer/LoginReducer'
import {AddPromoReducer} from '../Reducer/AddPromoReducer'
import {BaneerReducer} from '../Reducer/BaneerReducer'

const rootReducer= combineReducers({
    LoginReducer,
    AddPromoReducer,
    BaneerReducer,
});

export default rootReducer;