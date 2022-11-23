import {AddPromoConstent}from '../Constent/AddPromoConstent'
import {AddPromoService} from '../Service/AddPromoService'
export const ADDPromoAction = {
    AddPromoAction
}

function AddPromoAction(data){
    return dispatch=>{
        dispatch(request());
        return AddPromoService.AddPromoServices(data).then(
            response =>{
                dispatch(success(response));
                return Promise.resolve(response);
            },
            error =>{
                dispatch(failure(error));
                return Promise.reject();
            }
        )
    }
    function request(){
        return {type:AddPromoConstent.GET_ADD_PROMO_REQUEST}
    }
    function success(data){
        return {type:AddPromoConstent.GET_ADD_PROMO_SUCCESS,data}
    }
    function failure(error){
      return {type:AddPromoConstent.GET_ADD_PROMO_FAILURE,error}
    }
}