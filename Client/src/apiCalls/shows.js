import axiosInstance from ".";

export const GetAllShowsByTheatre= async(theatreId)=>{
    try{
      const response =await axiosInstance.get(`api/shows/getAllShowsByTheatreId/${theatreId}`)
      return response.data;
    }catch(error){
     console.log(error);
     return error
    }
}

export const GetShowById =async (payload)=>{
    try{
        const response = await axiosInstance.post('/api/shows/getShowById',payload);
        return response.data;
    }
    catch(error){
        return error
    }
} 

export const AddShow = async(payload)=>{
   try{
   const response = await  axiosInstance.post("/api/shows/add",payload);
   return response.data;
   }
   catch(error){
    return error
   }  
}


export const DeleteShow = async(showId)=>{
  try {
    const response = await axiosInstance.delete("api/shows/delete",showId);
    return response.data;
  }
  catch(error){
      return error
  }
}