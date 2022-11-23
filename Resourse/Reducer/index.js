import { combineReducers } from "redux";
import {LoginReducer} from '../Reducer/LoginReducer'
import {AddPromoReducer} from '../Reducer/AddPromoReducer'
import {BaneerReducer} from '../Reducer/BaneerReducer'
import {ItemReducer} from '../Reducer/ItemReducer'
const rootReducer= combineReducers({
    LoginReducer,
    AddPromoReducer,
    BaneerReducer,
    ItemReducer,
});

export default rootReducer;