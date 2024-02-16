import moment from 'moment';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { GetMovieById } from '../../apiCalls/movies';
import { hideLoading, showLoading } from '../../redux/loadersSlice';
import { message } from 'antd';
import { GetTheatresByMovie } from '../../apiCalls/theatres';

const TheatreForMovie = () => {
  
  const [movie,setMovie]=useState();
  const [theatres, setTheatres] =useState();
  const [isHovering, setIsHovering] =useState(false);
  const [date,setDate] =useState(moment().format('YYYY-MM-DD'));
  const params = useParams();
  const dispatch = useDispatch();
  const navigate =useNavigate();
 
  const getData = async()=>{
    const movieId = params.movieId;

    try{
        dispatch(showLoading());
        const response =await GetMovieById(movieId);
        console.log(response)
        if(response.success){
            setMovie(response.data);           
            message.success(response.message)
        }else{
          message.error(response.message)
        }

        dispatch(hideLoading());
    }
    catch(error){
      dispatch(hideLoading)
        return error
    }
  } 

  const getTheatres = async()=>{
     const movieId = params.movieId;
     try{
        dispatch(showLoading())
            const response = await GetTheatresByMovie({date,movie:movieId});
            if(response.success){
              console.log(response.data)
                  setTheatres(response.data)
                  message.success(response.message)
            }
            else{
              message.error(response.message);
            }
        dispatch(hideLoading())
     }
     catch(error){
      dispatch(hideLoading());
      message.error(error.message)
     }
  }

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };


  useEffect(()=>{
    getData();
  },[])
  useEffect(()=>{
    getTheatres();
  },[date])

  return (
    <div>
      {/* {JSON.stringify(movie)} */}
      {movie && (
        <div className='flex justify-between items-center mb-2'>
              <div> 
                <h1 className='text 2xl uppercase'>
                  {movie?.title} ({movie?.language})
                </h1>
                <h1 className='text-md'>
                   Release Date : {moment(movie?.releaseDate).format("MMM Do yyyy")} 
                </h1>

                <h1 className='text-md'>Genre : {movie?.genre}</h1>
              </div>
              <h1 className='text-md'> Select Date</h1>
              <input type='date'
                min={moment().format("YYYY-MM-DD")}
                value={date}
                onChange={(e)=>{
                  setDate(e.target.value)
                  navigate(`/movie/${params?.movieId}?date=${e.target.value}`);
                }}
              />
          </div>
      )}

      <hr/>
                {/* movie theatres */}
      <div className='mt-1'>
                <h1 className='text-xl uppercase'>Theatres</h1>
                {theatres?.length &&                
                theatres?.map((theatre,index)=>(
                  <div className='card p-2' key={index}>
                    <h1 className='text-md uppercase'>
                    {theatre?.name}
                    </h1>
                    <h1 className='text-sm'>Address :{theatre?.address} </h1>
                    {/* {JSON.stringify(theatre.shows)} */}
                    <div className='flex gap-2'>
                     {theatre?.shows.length && theatre?.shows?.sort((a,b)=>moment(a.time,"HH:mm") - moment(b.time,"HH:mm"))
                          .map((show)=>{
                            return <div key={show._id} style={{
                              backgroundColor: isHovering ? '#DF1827':'white',
                              color:isHovering?'white':'#DF1827',
                            }}
                              onMouseEnter={handleMouseEnter} 
                              onMouseLeave={handleMouseLeave}
                              className='card p-1 cursor-pointer border-primary'
                              onClick={()=>{
                                navigate(`/bookshow/${show._id}`);
                              }}                            
                            > 
                            <h1 className='text-sm'> 
                                {moment(show.time,"HH:mm").format("hh:mm A")}
                              </h1>

                            </div>
                          })
                        
                        
                        }
                    </div>
                  </div>
                ))}
      </div>
    </div>
  )
}

export default TheatreForMovie