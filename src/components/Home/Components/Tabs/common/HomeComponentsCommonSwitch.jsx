import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./HomeComponentsCommonSwitch.scss"
import {
    Row,
    Col,
    Switch,
} from "antd"

class HomeComponentsCommonSwitch extends Component{

    set_form_data = (obj,checked)=>{
        const return_param = {...obj,value:checked ? "1":"0"}
        this.props.set_form_data(return_param);
    }

    render(){
        const {currentObj={
            id:101,
            pid:100,
            group:"SYSTEM",
            field:"title",
            title:"标题",
            description:"系统标题",
            value:"1",
            type:"switch",
        }} = this.props;
        return (
            <div className="HomeComponentsCommonSwitchComponent">
                <Row className="content">
                    <Col span={4} className="content_col_one">
                        {currentObj.title}
                    </Col>
                    <Col span={8} className="content_col_two">
                        <Switch className="content_col_two_switch" checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={parseInt(currentObj.value)?true:false} onChange={(checked,e)=>this.set_form_data(currentObj,checked,e)} />
                    </Col>
                    <Col span={12} className="content_col_three">
                        {currentObj.description}
                    </Col>
                </Row>
            </div>
        );
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
    }),{

    }
)( withRouter(HomeComponentsCommonSwitch) )