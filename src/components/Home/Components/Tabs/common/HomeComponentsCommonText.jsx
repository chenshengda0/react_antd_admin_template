import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./HomeComponentsCommonText.scss"
import {
    Row,
    Col,
    Input,
} from "antd"

class HomeComponentsCommonText extends Component{

    set_form_data = (obj,e)=>{
        const return_param = {...obj,value:e.target.value}
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
            value:"123",
            type:"number",
        }} = this.props;
        return (
            <div className="HomeComponentsCommonTextComponent">
                <Row className="content">
                    <Col span={4} className="content_col_one">
                        {currentObj.title}
                    </Col>
                    <Col span={8} className="content_col_two">
                        <Input value={currentObj.value} className="content_col_two_input" onChange={(e)=>this.set_form_data(currentObj,e)} bordered={false}  placeholder={`请输入${currentObj.title}`} />
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
)( withRouter(HomeComponentsCommonText) )