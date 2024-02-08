import { Tabs } from "antd";
import PageTitle from '../../../components/PageTitle';
// import TheatreList from "./TheatreList";

const Profile = ()=>{
    
    return <div>
            <PageTitle title="Profile"/>

            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Bookings" key="1">
                        Bookings
                </Tabs.TabPane>
                <Tabs.TabPane tab="Apply for Theatre" key="2">
                        {/* <TheatreList/> */}
                </Tabs.TabPane>

            </Tabs>
    </div>
}

export default Profile;