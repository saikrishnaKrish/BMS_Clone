import { Col, Form, Modal, Row, Table, message } from "antd";
import { useState, useEffect } from "react";
import Button from "../../../../components/ReusbaleComponents/Button";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../../../redux/loadersSlice";
import { GetAllMovies } from "../../../../apiCalls/movies";
import {
  AddShow,
  DeleteShow,
  GetAllShowsByTheatre,
} from "../../../../apiCalls/shows";
import moment from "moment";

const Shows = ({ openShowsModal, setOpenShowsModal, theatre }) => {
  const [view, setView] = useState("table");
  const [shows, setShows] = useState([]);
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(showLoading());
      const movieResponse = await GetAllMovies();
      if (movieResponse.success) {
        setMovies(movieResponse.data);
      }
      const showsResponse = await GetAllShowsByTheatre(theatre._id);
      console.log(showsResponse);
      if (showsResponse.success) {
        message.success(showsResponse.message);
        setShows(showsResponse.data);
      } else {
        message.error(showsResponse.message);
      }
      dispatch(hideLoading());
    } catch (error) {
      message.error(error);
      dispatch(hideLoading());
    }
  };

  const handleDelete = async (showId) => {
    try {
      dispatch(showLoading());
      const response = await DeleteShow({ showId });
      if (response) {
        message.success(response.message);
        getData();
      } else {
        message.error(response.message);
      }
      dispatch(hideLoading());
    } catch (error) {
      message.error(error.message);
      dispatch(hideLoading());
    }
  };
  const handleAddShow = async (values) => {
    try {
      dispatch(showLoading());
      const response = await AddShow({ ...values, theatre: theatre._id });
      console.log(response)
      if (response.success) {

        message.success(response.message);
        getData();
        setView("table");
      } else {
        message.error(response.message);
      }
      dispatch(hideLoading());
    } catch (error) {
      message.error(error.message);
      dispatch(hideLoading());
    }
  };

  const columns = [
    { title: "Show Name", dataIndex: "name" },
    {
      title: "Date",
      dataIndex: "date",
      render: (text, record) => {
        return moment(text).format("MMM Do YYYY");
      },
    },
    { title: "Time", dataIndex: "time" },
    {
      title: "Movie",
      dataIndex: "movie",
      render: (text, record) => {
        console.log("text", text, "record" + record);
        return record?.movie?.title;
      },
    },
    { title: "Total Price", dataIndex: "ticketPrice" },
    { title: "Total Seats", dataIndex: "totalSeats" },
    {
      title: "Available Seats",
      dataIndex: "availableSeats",
      render: (text, record) => {
        console.log(record)
        return record.totalSeats-record.bookedSeats.length
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div className="flex gap-1 items-center">
            {record.bookedSeats.length === 0 && (
              <i
                className="ri-delete-bin-line"
                onClick={() => {
                  handleDelete(record._id);
                }}
              ></i>
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
    <Modal
      title=""
      open={openShowsModal}
      onCancel={() => setOpenShowsModal(false)}
      width={1400}
      footer={null}
    >
      <h1 className="text-primary text-md uppercase mb-1">
        Theatre : {theatre.name}
      </h1>
      <hr />
      <div className="flex justify-between mt-1 mb-1 items-center">
        <h1 className="text-md uppercase">
          {view === "table" ? "shows" : "Add Show"}
        </h1>

        {
          <Button
            variant={"outlined"}
            title="Add Show"
            onClick={() => setView("form")}
          />
        }
      </div>
      {view == "table" && <Table columns={columns} dataSource={shows} />}
      {view === "form" && (
        <Form layout="vertical" onFinish={handleAddShow}>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Form.Item
                label="Show Name"
                name={"name"}
                rules={[{ required: true, message: "Please input Show name!" }]}
              >
                <input type="text" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={"Date"}
                name={"date"}
                rules={[{ required: true, message: "Please input Show date!" }]}
              >
                <input type="date" min={new Date()} />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Time"
                name="time"
                rules={[{ required: true, message: "Please input Show time!" }]}
              >
                <input type="time" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={"Movie"}
                name={"movie"}
                rules={[{ required: true, message: "Please Select Movie!" }]}
              >
                <select>
                  <option value="">Select Movie </option>
                  {movies.length &&
                    movies.map((movie, index) => (
                      <option value={movie._id} key={index}>
                        {movie.title}
                      </option>
                    ))}
                </select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Ticket Price"
                name={"ticketPrice"}
                rules={[
                  {
                    required: true,
                    message: "Please input ticket price!",
                  },
                ]}
              >
                <input type="number" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={"Total Seats"}
                name={"totalSeats"}
                rules={[
                  { required: true, message: "Please input total seats!" },
                ]}
              >
                <input type="number" />
              </Form.Item>
            </Col>
          </Row>
          <div className="flex justify-end gap-1">
            <Button
              variant={"outlined"}
              title="Cancel"
              onClick={() => setView("table")}
            />
            <Button type={"submit"} variant={"contained"} title="SAVE" />
          </div>
        </Form>
      )}
    </Modal>
  );
};

export default Shows;

Shows.propTypes = {
  openShowsModal: PropTypes.func,
  setOpenShowsModal: PropTypes.func,
  theatre: PropTypes.object,
};
