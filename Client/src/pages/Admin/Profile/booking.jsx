import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { hideLoading, showLoading } from "../../../redux/loadersSlice";
import { getBookingsOfUser } from "../../../apiCalls/bookings";
import { Col, Row, message } from "antd";




function Bookings(){
    
    const [bookings,setBooking]=useState([]);
    const dispatch =useDispatch();
    const navigate = useNavigate();
    
    const getData=async ()=>{
        try {
            dispatch(showLoading());
                const response = await getBookingsOfUser();
                console.log(response)
                if(response.success){
                    console.log(response.data);
                    setBooking(response.data);
                }else{
                    message.error(response.message)
                }
            dispatch(hideLoading())
        }
        catch(error){
            dispatch(hideLoading());
            message.error(error.message)
        }
    }

    useEffect(()=>{
        getData()
    },[])


    return <div>
            <Row gutter={[16,16]}>
                {bookings && bookings?.map((booking)=>(
                    <Col span={12} key={booking?.id}>
                            <div className="card p-2 flex justify-between uppercase">
                                    <div>
                                        <h1 className="text-xl">
                                            {booking.show.movie.title} ({booking.show.movie.language})
                                        </h1>
                                        <div className="divider"></div>
                                        <h1 className="text-sm">
                                            Amount : ₹ { booking.show.ticketPrice * booking.seats.length}
                                        </h1>
                                    </div>
                                <div>
                                    <img
                                    src={booking.show.movie.poster}
                                                alt=""
                                                height={100}
                                                width={100}
                                                className="br-1"
                                                />
                                    <h1 className="text-sm"> Seats: {booking.seats.join(", ")}</h1>
                                </div>

                            </div>
                    </Col>
                ))}

            </Row>
    </div>
}


export default Bookings;