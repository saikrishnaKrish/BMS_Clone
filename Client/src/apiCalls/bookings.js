import axiosInstance from ".";

export const makePayment=async (token,amount)=>{
    console.log(token,amount)
    try{
            const response = await axiosInstance.post("/api/bookings/makePayment",{token,amount})

            return response.data
    }
    catch(error){
        return error.response
    }
}


export const bookShowTickets=async(payload)=>{
    try{
        const response = await axiosInstance.post("/api/bookings/bookShow",payload);
        return response.data;
    }
    catch(error){  
         return error.response.data
    }
}

export const getBookingsOfUser =async ()=>{
    try{
        const response = await axiosInstance.get("/api/bookings/getBookings");
        return response.data;
    }
    catch(error){
        return error.response.data
    }
}