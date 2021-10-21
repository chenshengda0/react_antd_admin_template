import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./HomeComponentsCommonNumber.scss"
import {
    Row,
    Col,
    InputNumber,
} from "antd"

class HomeComponentsCommonNumber extends Component{
    

    set_form_data = (obj,value)=>{
        const return_param = {...obj,value}
        this.props.set_form_data(return_param);
    }

    render(){
        const {currentObj={
            id:101,
            pid:100,
            group:"SYSTEM",
            field:"title",
            title:"开关",
            description:"开关",
            value:"1",
            type:"switch",
        }} = this.props;
        return (
            <div className="HomeComponentsCommonNumberComponent">
                <Row className="content">
                    <Col span={4} className="content_col_one">
                        {currentObj.title}
                    </Col>
                    <Col span={8} className="content_col_two">
                        <InputNumber className="content_col_two_input" bordered={false} min={0} max={10000000000} defaultValue={currentObj.value} onChange={ (val)=>this.set_form_data(currentObj,val) } />
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
)( withRouter(HomeComponentsCommonNumber) )