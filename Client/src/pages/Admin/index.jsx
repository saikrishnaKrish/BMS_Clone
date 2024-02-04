import { Tabs } from "antd"
import PageTitle from "../../components/PageTitle"
import MovieList from "./movieList"
import TheatreList from "./Profile/TheatreList"

const Admin=()=>{
    return <div className="ml-3 mt-3">
            <PageTitle title="Admin"/>
            
            <Tabs defaultActiveKey="1" >
                <Tabs.TabPane tab="Movies" key="1">
                    <MovieList/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Theatres" key="2">
                    {/* <h1>Theate table123</h1> */}
                    <TheatreList/>
                </Tabs.TabPane>
            </Tabs>
    </div>
    // return <h1>hello</h1>
}

export default Admin