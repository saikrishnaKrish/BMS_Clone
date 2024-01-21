import { axiosInstance } from ".";

//Registering new users

export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance.post("api/users/register", payload);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("api/users/login", payload);
    return response.data;
  } catch (err) {
    return err;
  }
};
