import { Tabs } from "antd";
import PageTitle from "../../../components/PageTitle";
import TheatreList from "../../Admin/TheatreList";
import Bookings from "./booking";
// import { Link } from "react-router-dom";



const Profile = () => {
  return (
    <div>
      <PageTitle title="Profile" />
     
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Bookings" key="1">
        {/* <Link to="/">Navigate to home</Link> */}
          Bookings 
          It will display the seats booked by the user.
           <Bookings/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Apply for Theatre" key="2">
          <TheatreList />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Profile;
