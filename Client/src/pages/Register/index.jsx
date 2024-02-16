import { Form, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../../apiCalls/users";
import {useEffect} from 'react';
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/loadersSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch =useDispatch();
  console.log("local storage",
  localStorage.getItem("token"))

  useEffect(()=>{
      (localStorage.getItem("token")!=null  && navigate("/"))
  },[])

  const onFinish = async (values) => {
    try {
      dispatch(showLoading())
      const response = await RegisterUser(values);
      console.log(response)
      console.log(response)
      if (response.success) {
        message.success(response.message);
        navigate("/login");
      } else {
        message.error(response.message);
      }

      dispatch(hideLoading())
    } catch (error) {
      dispatch(hideLoading())
      message.error(error.message);
    }
  };

  return (
    <div className="flex justify-center h-screen items-center bg-body">
      <div className="card p-3 w-400">
        <h1 className="text-xl mb-1">Welcome to SKS Shows! Please Register </h1>
        <hr />
        <Form layout="vertical" className="mt-1" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <input type="text" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <input type="password" />
          </Form.Item>

          <div className="flex flex-col mt-2 gap-1">
            <Button fullWidth htmlType="submit" type="primary">
              {" "}
              Register{" "}
            </Button>
            <Link to="/login" className="text-primary">
              {" "}
              Already have an account? Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
