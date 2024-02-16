import axiosInstance from ".";


//Get all movies
export const GetAllMovies = async()=>{
    try{
        const response = await axiosInstance.get("/api/movies/getAllMovies")
        return response.data;
    }
    catch(error){
        console.log(error)
        return error
    }
}

export const GetMovieById = async (movieId)=>{
    console.log(movieId)
    try{
        const response = await axiosInstance.get(`/api/movies/getMovieById/${movieId}`);
        console.log(response)
        return response.data;
    } 
    catch(error){
        return error
    }
}

export const AddMovie = async(payload)=>{
    try{
        const response = await axiosInstance.post("api/movies/add",payload);
        return response.data
    }   
    catch(error){
        return error;
    }

}


export const DeleteMovie =async({movieId})=>{
    try{
        const response = await axiosInstance.delete(`api/movies/delete/${movieId}`);
        return response.data       
    }catch(error){
        return error
    }
}


export const updateMovie = async(payload)=>{
    try{
        const response = await axiosInstance.put("api/movies/update",payload);
        return response.data
    }
    catch(error){
        return error
    }
}