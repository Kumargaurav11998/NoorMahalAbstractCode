import {AddPromoConstent} from '../Constent/AddPromoConstent'
const initialState={
    AddPromo:{}
}

export function AddPromoReducer(state = initialState,action){
    switch(action.type){
        case  AddPromoConstent.GET_ADD_PROMO_REQUEST:
            return state;

        case AddPromoConstent.GET_ADD_PROMO_SUCCESS:
            return {
                ...state,
                AddPromo:{
                    ...state.data,
                    ...action.data['data']
                }
            };
            case AddPromoConstent.GET_ADD_PROMO_FAILURE:
                return state;

        default:
            return state
    }
}