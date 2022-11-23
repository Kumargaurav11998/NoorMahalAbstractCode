import {BaneerConstent} from '../Constent/BaneerConstent'
const initialState={
    Baneer:{}
}

export function BaneerReducer(state = initialState,action){
    switch(action.type){
        case  BaneerConstent.GET_Baneer_REQUEST:
            return state;

        case BaneerConstent.GET_Baneer_SUCCESS:
            return {
                ...state,
                Baneer:{
                    ...state.data,
                    ...action.data['data']
                }
            };
            case BaneerConstent.GET_Baneer_FAILURE:
                return state;

        default:
            return state
    }
}