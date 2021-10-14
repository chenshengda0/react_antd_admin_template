import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {
    WithContentTempContainer,
} from "../../../container"
import {
    Row,
    Col,
    Tabs,
} from "antd"
import {
    InitTestTabsDataAction,
    SetTestTabsDataAction,
} from "../../../redux/actions"
import {
    HomeComponentsTabsTabPaneChildComponent,
} from "../../../components/Home/Components/Tabs"

const { TabPane } = Tabs;

class Home extends Component{

    componentDidMount(){
        this.props.InitTestTabsDataAction();
    }

    listToTree = (data = [])=>{
        //list转tree
        const resObjData = data.reduce((prev,item)=>{
            prev[item.id] = item;
            return prev;
        },{})
        const newResData = data.reduce( (pre,cur)=>{
            const pid = cur.pid;
            const parent = resObjData[pid];
            if( parent ){
                parent.children ? parent.children.push(cur) : parent.children = [cur]
            }else{
                pre = [...pre,cur]
            }
            return pre;
        },[] )
        return newResData;
    }

    render(){
        const {TestTabsData = []} = this.props;
        const TreeData = this.listToTree(TestTabsData);
        const loading = TreeData.length > 0 ? true : false;
        return (
            <>
            {
                loading 
                ?
                (
                    <Row>
                    <Col span={24}>
                        <Tabs defaultActiveKey={TreeData[0].group} destroyInactiveTabPane={true} tabPosition={"top"}>
                            {
                                TreeData.map( (item)=>{
                                    return (
                                        <TabPane tab={item.title} key={item.group} >
                                            <HomeComponentsTabsTabPaneChildComponent children={item.children || []}></HomeComponentsTabsTabPaneChildComponent>
                                        </TabPane>
                                    )
                                } )
                            }
                        </Tabs>
                    </Col>
                </Row>
                )
                :
                (<></>)
            }

            </>
        )
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
        TestTabsData : store.TestTabsData,
    }),{
        InitTestTabsDataAction,
        SetTestTabsDataAction,
    },null,{forwardRef:true}
)( withRouter( WithContentTempContainer( Home) ) )