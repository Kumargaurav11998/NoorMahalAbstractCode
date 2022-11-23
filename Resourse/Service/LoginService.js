import Config from '../Helper/Config'


export const LoginService ={
    LoginServices
}

async function LoginServices(postData){
    var URL = Config.API_URL + 'login'
    const requestOption = {
        method:'POST',

        headers:{
            'Content-Type':'multipart/form-data'
        },
        body:postData
    }

    return fetch(URL,requestOption)
    .then(handleResponse)
    .then(response=>{
        return response;
    }).catch((err)=>{
    })
}

function handleResponse(response) {
     return response.text().then(text => {
         const data = text && JSON.parse(text);
        
         if (!response.ok) {
             const error = (data && data.message) || response.statusText;
 
 
             return Promise.reject(error);
         }
 
 
         return data;
     });
 }