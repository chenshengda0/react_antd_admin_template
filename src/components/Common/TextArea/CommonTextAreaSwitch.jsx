import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonTextAreaSwitch.scss"
import {
    Row,
    Col,
    Switch,
} from "antd"
class CommonTextAreaSwitch extends Component{

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
        return (
            <>
                <div className="CommonTextAreaSwitchComponent">
                    <Row className="row_one">
                        <Col span={24} className="row_one_col_one">
                            {title}
                        </Col>
                    </Row>
                    <Row className="row_two">
                        <Col span={24} className="row_two_col_one">
                            <Switch className="row_two_col_one_textarea" checkedChildren="开启" unCheckedChildren="关闭" checked = {value} onChange={
                                (...param)=>{
                                    const val = param[0];
                                    const Obj = {[name]:{
                                        title,
                                        type,
                                        value:val,
                                        name,
                                        options,
                                        placeholder,
                                    }}
                                    set_form_data(Obj);
                                }
                            } />
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
)( withRouter(CommonTextAreaSwitch) );