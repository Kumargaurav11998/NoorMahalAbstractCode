import {ItemConstent} from '../Constent/ItemConstent'
const initialState={
    Item:{}
}

export function ItemReducer(state = initialState,action){
    switch(action.type){
        case  ItemConstent.GET_ITEM_REQUEST:
            return state;

        case ItemConstent.GET_ITEM_SUCCESS:
            return {
                ...state,
                Item:{
                    ...state.data,
                    ...action.data['data']
                }
            };
            case ItemConstent.GET_ITEM_FAILURE:
                return state;

        default:
            return state
    }
}