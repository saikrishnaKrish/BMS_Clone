import { Form, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../apiCalls/users";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await LoginUser(values);
      if (response.success) {
        localStorage.setItem("token", response.data);
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      navigate("/");
    } catch (error) {
      message(error);
    }
  };

  return (
    <div className="flex justify-center h-screen items-center bg-body">
      <div className="card p-3 w-400">
        <h1 className="text-xl mb-1">Welcome Again!! Please Login</h1>
        <hr />
        <Form layout="vertical" className="mt-1" onFinish={onFinish}>
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
              Log in{" "}
            </Button>
            <Link to="/register" className="text-primary">
              {" "}
              Don't have an account? Register
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
