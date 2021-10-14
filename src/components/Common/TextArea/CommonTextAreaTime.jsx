import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonTextAreaTime.scss"
import {
    Row,
    Col,
    DatePicker,
    TimePicker,
} from "antd"
import moment from "moment"
class CommonTextAreaTime extends Component{

    render(){
        const {
            title="名字",
            type="text",
            value="",
            name="name",
            placeholder="请输入名字",
            options = [],
            set_form_data = (Obj)=>{
                this.props.set_form_data(Obj);
            }
        } = this.props;
        //日期格式转时间戳
        const valueArr = value.split(/\s+/);
        return (
            <>
                <div className="CommonTextAreaTimeComponent">
                    <Row className="row_one">
                        <Col span={24} className="row_one_col_one">
                            {title}
                        </Col>
                    </Row>
                    <Row className="row_two">
                        <Col span={12} className="row_two_col_one">
                            <DatePicker className="row_two_col_one_textarea" value={moment(valueArr[0], 'YYYY-MM-DD')} onChange={(...param)=>{
                                const val = param[1] ? `${param[1]} ${valueArr[1]}` : `${valueArr[0]} ${valueArr[1]}`;
                                const Obj = {[name]:{
                                    title,
                                    type,
                                    value:val,
                                    name,
                                    options,
                                    placeholder,
                                }}
                                set_form_data(Obj);
                            }} />
                        </Col>
                        <Col span={12} className="row_two_col_two">
                            <TimePicker className="row_two_col_two_textarea" onChange={(...param)=>{
                                const val = param[1] ? `${valueArr[0]} ${param[1]}` : `${valueArr[0]} ${valueArr[1]}`;
                                const Obj = {[name]:{
                                    title,
                                    type,
                                    value:val,
                                    name,
                                    options,
                                    placeholder,
                                }}
                                set_form_data(Obj);
                            }} value={moment(valueArr[1], 'HH:mm:ss')} />
                        </Col>
                    </Row>
                </div>
            </>

        )
    }

}

export default connect(
    store=>({
        SystemConfigData : store.SystemConfigData,
    }),{

    }
)( withRouter(CommonTextAreaTime) );