import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./HomeComponentsTabsTabPaneChild.scss"
import {
    Row,
    Col,
} from "antd"
import {
    HomeComponentsCommonNumberComponent,
    HomeComponentsCommonSwitchComponent,
    HomeComponentsCommonTextComponent,
    HomeComponentsCommonTextareaComponent,

    HomeComponentsCommonButtonComponent,
} from "./common"
import {
    SetTestTabsDataAction,
} from "../../../../redux/actions"

class HomeComponentsTabsTabPaneChild extends Component{

    state = {

    }

    componentDidMount(){
        const  {children=[
            {id:101,pid:100,group:"SYSTEM",field:"title",title:"标题",description:"系统标题",value:"万福源",type:"text"},
            {id:102,pid:100,group:"SYSTEM",field:"descript",title:"说明",description:"系统简介",value:"万福源是balabalabala",type:"textarea"},
        ]}= this.props;
        const newState = children.reduce( (prev,item)=>{
            return {...prev,[item.id]:item}
        } ,{})
        this.setState({...newState})
    }

    set_form_data = (param)=>{
        const paramObj = {[param.id]:param};
        this.setState({...paramObj})
    }

    show_list = (item)=>{
        const data = Object.assign({},{currentObj:item},{set_form_data:(param)=>this.set_form_data(param)})
        switch (item.type.toUpperCase()) {
            case "number".toUpperCase():
                return (
                    <HomeComponentsCommonNumberComponent {...data}></HomeComponentsCommonNumberComponent>
                )

            case "switch".toUpperCase():
                return (
                    <HomeComponentsCommonSwitchComponent {...data}></HomeComponentsCommonSwitchComponent>
                )

            case "text".toUpperCase():
                return (
                    <HomeComponentsCommonTextComponent {...data}></HomeComponentsCommonTextComponent>
                )

            default:
                return (
                    <HomeComponentsCommonTextareaComponent {...data}></HomeComponentsCommonTextareaComponent>
                )
        }
    }

    render(){
        const objData = this.state;
        const children = Object.values(objData);
        const loading = children.length > 0 ? true : false;
        return (
            <>

                <div className="HomeComponentsTabsTabPaneChildComponent">
                    {
                        loading 
                        ? 
                        (
                            <Row>
                                {
                                    children.map( item=>{
                                        return (
                                            <Col span={24} key={item.id} style={{
                                                marginTop:"10px",
                                            }}>
                                                {
                                                    this.show_list(item)
                                                }
                                            </Col>
                                        )
                                    } )
                                }

                            </Row>
                        )
                        :
                        (<></>) 
                    }

                    <Row style={{
                        marginTop:"30px",
                    }}>
                        <Col span={24}>
                            <HomeComponentsCommonButtonComponent {...Object.assign( {},{comment:"提交表单"},{to_submite_form:()=>{
                                this.props.SetTestTabsDataAction( Object.values(this.state) ) 
                            }} )}></HomeComponentsCommonButtonComponent>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
    }),{
        SetTestTabsDataAction,
    }
)( withRouter( HomeComponentsTabsTabPaneChild ) )