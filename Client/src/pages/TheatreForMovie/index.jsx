import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { GetMovieById } from '../../apiCalls/movies';
import { hideLoading, showLoading } from '../../redux/loadersSlice';
import { message } from 'antd';
import { GetTheatresByMovie } from '../../apiCalls/theatres';

const TheatreForMovie = () => {
  
  const [movie,setMovie]=useState();
  const [theatre, setTheatres] =useState();
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
                  setMovie(response.data)
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

  useEffect(()=>{
    getData();
  },[])
  useEffect(()=>{
    getTheatres();
  },[])

  return (
    <div>
      {movie && (
        <div className='flex justify-between items-center mb-2'>
              <div> 
                <h1 className='text 2xl uppercase'>
                  {movie.title} ({movie.language})
                </h1>
                <h1 className='text-md'>
                   Release Date : {moment(movie.releaseDate).format("MMM Do yyyy")} 
                </h1>

                <h1 className='text-md'>Genre : {movie.genre}</h1>
              </div>
              <h1 className='text-md'> Select Date</h1>
              <input type='date'
                min={moment().format("YYYY-MM-DD")}
                value={date}
                onChange={(e)=>{
                  setDate(e.target.value)
                  navigate(`/movie/${params.movieId}?date=${e.target.value}`);
                }}
              />
          </div>
      )}
    </div>
  )
}

export default TheatreForMovie