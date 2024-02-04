import { Table, message } from "antd";
import React, { useEffect, useState } from "react";
import MovieForm from "./movieForm";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/loadersSlice";
import { DeleteMovie, GetAllMovies } from "../../apiCalls/movies";
import Button from "../../components/ReusbaleComponents/Button";
import moment from "moment";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [showMovieFormModal, setShowMovieFormModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const [formType, setFormType] = useState("add");

  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(showLoading());

      const response = await GetAllMovies();
      if (response.success) {
        setMovies(response.data);
      } else {
        message.error(response.message);
      }

      dispatch(hideLoading());
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
    }
  };

  const handleDelete = async (movieId) => {
    try {
      dispatch(showLoading());
      const response = await DeleteMovie({ movieId });
      if (response.success) {
        message.success(response.message);
        getData();
      } else {
        message.error(response.message);
      }
      dispatch(hideLoading());
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Poster",
      dataIndex: "poster",
      render: (text, record) => {
        return (
          <img
            src={record.poster}
            alt={record.title}
            width={"80"}
            height={"100"}
            className="br-1"
          />
        );
      },
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Duration",
      dataIndex: "duration",
    },
    {
      title: "Genre",
      dataIndex: "genre",
    },
    {
      title: "Language",
      dataIndex: "language",
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",
      render: (text, record) => {
        return moment(record.releaseDate).format("DD-MM-YYYY");
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div className="flex gap-1">
            <i
              className="ri-delete-bin-line"
              onClick={() => {
                handleDelete(record._id);
              }}
            ></i>
            <i
              className="ri-pencil-line"
              onClick={() => {
                setSelectedMovie(record);
                setFormType("edit");
                setShowMovieFormModal(true);
              }}
            ></i>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <Button
          title="Add Movie"
          variant="outlined"
          // className=""
          onClick={() => {
            setShowMovieFormModal(true);
            setFormType("add");
          }}
        />
      <div className="flex justify-start">
        <Table columns={columns} dataSource={movies} />
        {showMovieFormModal && (
          <MovieForm
            showMovieFormModal={showMovieFormModal}
            setShowMovieFormModal={setShowMovieFormModal}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            formType={formType}
            getData={getData}
          />
        )}
         
      </div>
    </div>
  );
};

export default MovieList;
