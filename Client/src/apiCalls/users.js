import { axiosInstance } from ".";

//Registering new users

const RegisterUser = async (payload)=>{
    
    try{
        const response = await axiosInstance.post('api/users/register',payload);
        return response.data;
    }catch(err){
        return err
    }

}


const LoginUser = async(payload)=>{
    try{
        const response = await axiosInstance.post('api/users/login',payload);
        return response.data
    }
    catch(err){
        return err
    }
}


module.exports = { LoginUser, RegisterUser };
