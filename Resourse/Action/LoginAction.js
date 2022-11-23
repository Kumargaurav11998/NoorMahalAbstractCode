import {LoginConstant}from '../Constent/LoginConstent'
import {LoginService} from '../Service/LoginService'
export const LOAction = {
    LoginAction
}

function LoginAction(data){
    return dispatch=>{
        dispatch(request());
        return LoginService.LoginServices(data).then(
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
        return {type:LoginConstant.GET_LOGIN_REQUEST}
    }
    function success(data){
        return {type:LoginConstant.GET_LOGIN_SUCCESS,data}
    }
    function failure(error){
      return {type:LoginConstant.GET_LOGIN_FAILURE,error}
    }
}