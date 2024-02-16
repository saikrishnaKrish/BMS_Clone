import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/ReusbaleComponents/Button";
import TheatreForm from "./TheatreForm";
import { useEffect, useState } from "react";
// import useNavigate from "react-router-dom";
import { hideLoading, showLoading } from "../../../redux/loadersSlice";
import {
  // DeleteTheatre,
  GetAllTheatresByOwner,
  UpdateTheatre,
} from "../../../apiCalls/theatres";
import { Table, message } from "antd";
import Shows from "./Shows";

const TheatreList = () => {
  // const { user } = useSelector((state) => state.users);
  const user = useSelector((state) => state.users).user;
  console.log("user Details",user)
  const [showTheatreFormModal, setShowTheatreFormModal] = useState(false);
  const [selectedTheatre, setSelectedTheatre] = useState(null);
  const [formType, setFormType] = useState("add");
  const [theatres, setTheatres] = useState([]);

  const [openShowsModal, setOpenShowsModal] = useState(false);

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await GetAllTheatresByOwner(user._id);
      if (response.success) {
        setTheatres(response.data);
     
        console.log("y", response.data);
      } else {
        message.error(response.message);
      }
      dispatch(hideLoading());
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
    }
  };

  const handleStatusChange =async (theatre)=>{
    console.log("theatre",theatre)
  try{
    dispatch(showLoading());

    const response = await UpdateTheatre({
      ...theatre,
      theatreId:theatre._id,
      isActive:!theatre.isActive
    })
    if(response.success){
      setTheatres(response.data);
      getData()
    }else{
      message.error(response.message);
    }
    dispatch(hideLoading());

  } 

  catch(error){
    message.error(error)
    dispatch(hideLoading())
    console.log(error)
  }
  }

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Address", dataIndex: "address" },
    { title: "Phone", dataIndex: "phone" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Status",
      dataIndex: "isActive",
      render: (text, record) => {
        console.log(record.isActive)
        if (text) {
          return "Approved";
        } else {
          return "Pending/Blocked";
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      // render: (text, record) => {
      //   return (
      //     <div className="flex gap-1">
      //           {record.isActive && (
      //             <span 
      //               className="undeline"
      //               onClick={()=>handleStatusChange(record)}
      //             >
      //               Block
      //             </span>
      //           )}
      //           {!record.isActive && (
      //             <span
      //             className="undeline"
      //             onClick={()=>handleStatusChange(record)}>
      //                 Approve
      //             </span>
      //           )}
      //     </div>
      //   );
      // },
      render: (text, record) => {
        return (
          <div className="flex gap-1">
            {record.isActive && (
              <span
                className="underline"
                 onClick={() => handleStatusChange(record)}
              >
                Block
              </span>
            )}
            {!record.isActive && (
              <span
                className="underline"
                onClick={() => handleStatusChange(record)}
              >
                Approve
              </span>
            )}
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div>
      <div className="flex justify-end mb-1">
        <Button
          variant={"outlined"}
          title="Add Theatre"
          onClick={() => {
            setFormType("add");
            setShowTheatreFormModal(true);
          }}
        />
      </div>

      <Table columns={columns} dataSource={theatres} />

      {showTheatreFormModal && (
        <TheatreForm
          showTheatreFormModal={showTheatreFormModal}
          setShowTheatreFormModal={setShowTheatreFormModal}
          formType={formType}
          selectedTheatre={selectedTheatre}
          setSelectedTheatre={setSelectedTheatre}
          getData={getData}
        />
      )}
      {openShowsModal && (
        <Shows
          openShowsModal={openShowsModal}
          setOpenShowsModal={setOpenShowsModal}
          theatre={selectedTheatre}
        />
      )}
    </div>
  );
};

export default TheatreList;
