import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/ReusbaleComponents/Button";
import TheatreForm from "./TheatreForm";
import { useEffect, useState } from "react";
// import useNavigate from "react-router-dom";
import { hideLoading, showLoading } from "../../../redux/loadersSlice";
import {
  DeleteTheatre,
  GetAllTheatresByOwner,
} from "../../../apiCalls/theatres";
import { Table, message } from "antd";
import Shows from "./Shows";

const TheatreList = () => {
  const { user } = useSelector((state) => state.users);
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

  const handleDelete = async (id) => {
    try {
      dispatch(showLoading());
      const response = await DeleteTheatre({ theatre: id });
      dispatch(hideLoading());
      if (response.success) {
        message.success(response.message);
        getData();
      } else {
        dispatch(hideLoading());
        message.error(response.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Address", dataIndex: "address" },
    { title: "Phone", dataIndex: "phone" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Status",
      dataIndex: "isActive",
      render: (text, record) => {
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
      render: (text, record) => {
        return (
          <div className="flex gap-1 items-center">
            <i
              className="ri-delete-bin-line"
              onClick={() => handleDelete(record._id)}
            ></i>
            <i
              className="ri-pencil-line"
              onClick={() => {
                setFormType("edit");
                setSelectedTheatre(record);
                setShowTheatreFormModal(true);
              }}
            ></i>
            {record.isActive && (
              <span
                className="underline"
                onClick={() => {
                  setSelectedTheatre(record);
                  setOpenShowsModal(true);
                }}
              >
                Shows
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
