import axiosInstance from ".";

export const GetAllTheatresByOwner = async (userId) => {
  try {
    const respoonse = await axiosInstance.get(`api/theatre/getAllTheatresByOwnerId/${userId}`
    );
    return respoonse.data;
  } catch (error) {
    return error;
  }
};


export const GetTheatresByMovie = async (payload)=>{
  console.log("hduhhdish")
  try{
    const response = await axiosInstance.post(`/api/theatre/getTheatresByMovieId`,payload);
    console.log("response",response)
    return response.data
  }catch(error){
    return error;
  }
}

export const getAllTheatres = async ()=>{
  try{
    const response = await axiosInstance.get('/api/theatre/getAllTheatres');
    return response.data; 

  }
  catch(error){
    return error
  }
}

export const AddTheatre = async (payload) => {
  try {
    const response = await axiosInstance.post(`api/theatre/add`, payload);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const DeleteTheatre = async (payload) => {
  try {
    const response = await axiosInstance.delete(`/api/theatre/delete`, payload);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const UpdateTheatre = async (payload) => {
  try {
    const response = await axiosInstance.put(`/api/theatre/update`, payload);
    return response.data;
  } catch (error) {
    return error;
  }
};
