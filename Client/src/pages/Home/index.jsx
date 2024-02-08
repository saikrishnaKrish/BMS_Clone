// import {Layout} from "antd"
// import ReachOutForm from "../../components/ReachOutForm";

import { Col, Row, message } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { hideLoading, showLoading } from "../../redux/loadersSlice";
import { GetAllMovies } from "../../apiCalls/movies";





const Home = () => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const [movies,setMovies] = useState();
  const [searchText, setSearchText] = useState("");
 

  const getData = async ()=>{
     try { 
     dispatch(showLoading())
     const response = await GetAllMovies();
     if(response){
      setMovies(response.data);
     }else{
      message.error(response.message);
     }
     dispatch(hideLoading())
     }
     catch(error){
      message.error(error);
      dispatch(hideLoading())
     }
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    // <Layout>
    //     <div>
    //         Welcome back !! I from home page
    //     </div>
        
    //         <div className="reactOutForm">
    //             <ReachOutForm/>
    //         </div>
    // </Layout>
      <div>
        <input type="text" 
        placeholder="Search For Currently Showing Movies"
        className="Search-input" 
        onChange={(e)=> setSearchText(e.target.value)}
        />
        <Row
         gutter={[20]} 
         className="mt-2" 
        >
          { movies.length > 0 && movies?.filter((movie)=>movie.title.toLowerCase().includes(searchText.toLowerCase()))
          .map((movie)=>(
              <Col key={movie._id}>
                <div className="card flex flex-col gap-1 cursor-pointer"
                onClick={()=>navigate(`/movie/${movie._id}?date=${moment().format("YYYY-MM-DD")}`)}>
                  <img src={movie.poster}  alt="" height={200}/>

                  <div className="flex justify-center p-1">
                      <h1 className="text-md uppercase">{movie.title}</h1>
                  </div>

                </div>
              </Col>
            ))
          
          }

        </Row>
      </div>

  )
}

export default Home;