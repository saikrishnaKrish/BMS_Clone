import { Tabs } from "antd"
import PageTitle from "../../components/PageTitle"
import MovieList from "./movieList"

const Admin=()=>{
    return <div>
            <PageTitle title="Admin"/>
            
            <Tabs defaultActiveKey="1" >
                <Tabs.TabPane tab="Movies" key="1">
                    <MovieList/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Theatres" key="2">
                    <h1>Theate table</h1>
                </Tabs.TabPane>
            </Tabs>
    </div>
    // return <h1>hello</h1>
}

export default Admin