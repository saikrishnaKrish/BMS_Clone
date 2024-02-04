import { Form, message, Modal } from "antd";
import Button from "../../../components/ReusbaleComponents/Button";
import { useSelector, useDispatch } from "react-redux";
import {hideLoading,showLoading} from "../../../redux/loadersSlice";
import { AddTheatre, UpdateTheatre } from "../../../apiCalls/theatres";
import PropTypes from "prop-types"

const TheatreForm = ({
  showTheatreFormModal,
  setShowTheatreFormModal,
  formType,
  selectedTheatre,
  setSelectedTheatre,
  getData,
}) => {

    const {user} = useSelector((state)=>state.users);
    const dispatch =useDispatch();

    const onFinish= async (values)=>{
            values.owner = user._id;
    
            try{
                dispatch(showLoading())
                let response =null;
                if(formType ==="add"){
                  response = await AddTheatre(values);
                }else{
                  values.theatreId = selectedTheatre._id;
                  response = await UpdateTheatre(values);
                }
       
                if(response.success){
                  message.success(response.success);
                  setShowTheatreFormModal(false);
                  setSelectedTheatre(null);
                  getData();
                }
                else{
                  console.log("error",response)
                  message.error(response.message);
                }

                dispatch(hideLoading());
            }catch(error)  {
                dispatch(hideLoading())
                console.log("error",error)
                message.error(error.message);
            }
    }
  return (
    <Modal
      title={formType === "add" ? "Add Theatre" : "Edit Theatre"}
      open={showTheatreFormModal}
      onCancel={() => {
        setShowTheatreFormModal(false);
        setSelectedTheatre(null);
      }}
      footer={null}
    >
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={selectedTheatre}
      >
        <Form.Item
          label="Name"
          name={"name"}
          rules={[{ required: true, message: "Please input theatre name!" }]}
        >
          <input type="text" />
        </Form.Item>

        <Form.Item
          label={"Address"}
          name={"address"}
          rules={[{ required: true, message: "Please input theatre address!" }]}
        >
          <input type="text" />
        </Form.Item>

        <Form.Item
          label={"Phone Number"}
          name={"phone"}
          rules={[
            { required: true, message: "Please input theatre phone  number!" },
          ]}
        >
          <input type="text" />
        </Form.Item>

        <Form.Item
          label={"Email"}
          name={"email"}
          rules={[{ required: true, message: "Please enter theatre email" }]}
        >
          <input type="text"/>
        </Form.Item>

        <div className="flex justify-end gap-1">
          <Button
            title="Cancel"
            variant="outlined"
            type="button"
            onClick={() => {
              setShowTheatreFormModal(false);
              setSelectedTheatre(null);
            }}
          />
          <Button title="save" type="submit" />
        </div>
      </Form>
    </Modal>
  );
};


TheatreForm.propTypes={
  showTheatreFormModal:PropTypes.bool,
  setShowTheatreFormModal:PropTypes.func,
  formType:PropTypes.string,
  setFormType:PropTypes.func,
  selectedTheatre:PropTypes.string,
  setSelectedTheatre:PropTypes.func,
  getData:PropTypes.func,

}

export default TheatreForm;
