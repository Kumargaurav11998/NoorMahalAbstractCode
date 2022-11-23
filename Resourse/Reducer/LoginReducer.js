import {LoginConstant} from '../Constent/LoginConstent'

const initialState={
    Login:{}
}

export function LoginReducer(state = initialState,action){
    switch(action.type){
        case LoginConstant.GET_LOGIN_REQUEST:
            return state;

        case LoginConstant.GET_LOGIN_SUCCESS:
            return {
                ...state,
                Login:{
                    ...state.data,
                    ...[action.data]                }
            };
            case LoginConstant.GET_LOGIN_FAILURE:
                return state;

        default:
            return state
    }
}