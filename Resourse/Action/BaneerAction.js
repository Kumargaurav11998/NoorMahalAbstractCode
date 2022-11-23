import {BaneerConstent} from '../Constent/BaneerConstent'
import {BaneerService} from '../Service/BaneerService'
export const BANEERAction = {
    BaneerAction
}

function BaneerAction(data){
    return dispatch=>{
        dispatch(request());
        return BaneerService.BaneerServices(data).then(
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
        return {type:BaneerConstent.GET_Baneer_REQUEST}
    }
    function success(data){
        return {type:BaneerConstent.GET_Baneer_SUCCESS,data}
    }
    function failure(error){
      return {type:BaneerConstent.GET_Baneer_FAILURE,error}
    }
}