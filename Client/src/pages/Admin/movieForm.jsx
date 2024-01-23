import { useDispatch } from "react-redux";
import moment from "moment";
import { Col, Form, Modal, Row, message } from "antd";
import { hideLoading, showLoading } from "../../redux/loadersSlice";
import { AddMovie, updateMovie } from "../../apiCalls/movies";
import PropTypes from "prop-types";
import Button from "../../components/Button";

const MovieForm = ({
  showMovieFormModal,
  setShowMovieFormModal,
  selectedMovie,
  setSelectedMovie,
  getData,
  formType,
}) => {
  if (selectedMovie) {
    selectedMovie.releaseDate = moment(selectedMovie?.releaseDate).format(
      "YYYY-MM-DD"
    );
  }

  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      let response = null;
      if (formType == "add") {
        response = await AddMovie(values);
      } else {
        response = await updateMovie({
          ...values,
          movieId: selectedMovie._id,
        });
      }

      if (response.success) {
        getData();
        message.success(response.message);
        setShowMovieFormModal(false);
      } else {
        message.error(response.message);
      }

      dispatch(hideLoading());
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
    }
  };

  return (
    <Modal
      title={formType == "add" ? "ADD MOVIE" : "EDIT MOVIE"}
      open={showMovieFormModal}
      onCancel={() => {
        setShowMovieFormModal(false);
        setSelectedMovie(null);
      }}
      footer={null}
      width={800}
    >
      <Form layout="vertical" initialValues={selectedMovie} onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Movie Name" name={"title"}>
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Movie Description" name={"description"}>
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Movie Duration (Min)" name={"duration"}>
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="language" name={"language"}>
              <select name="" id="">
                <option>Select Language</option>
                <option value={"Telugu"}>Telugu</option>
                <option value={"Tamil"}>Tamil</option>
                <option value={"Hindi"}>Hindi</option>
                <option value={"English"}>English</option>
                <option value="Kannada">Kannada</option>
              </select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Movie Release Date" name="releaseDate">
              <input type="date" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Genre" name={"genre"}>
              <select name="" id="">
                <option value={""}>Select Genre</option>
                <option value={"Action"}>Action</option>
                <option value={"Comedy"}>Comedy</option>
                <option value={"Drama"}>Drama</option>
                <option value={"Romance"}>Romance</option>
              </select>
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item label={"Poster URL"} name="poster">
              <input type="text" />
            </Form.Item>
          </Col>

          <div className="flex justify-end gap-1">
            

            <Button
              title="Cancel"
              variant="outlined"
              type="button"
              onClick={() => {
                setShowMovieFormModal(false);
                setSelectedMovie(null);
              }}
            />
            <Button title="Submit" type="submit" />
          </div>
        </Row>
      </Form>
    </Modal>
  );
};

MovieForm.propTypes = {
  showMovieFormModal: PropTypes.bool.isRequired,
  setShowMovieFormModal: PropTypes.func.isRequired,
  selectedMovie: PropTypes.object,
  setSelectedMovie: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  formType: PropTypes.string.isRequired,
};

export default MovieForm;
