import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonTextAreaText.scss"
import {
    Row,
    Col,
    Input,
} from "antd"
class CommonTextAreaText extends Component{

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
                <div className="CommonTextAreaTextComponent">
                    <Row className="row_one">
                        <Col span={24} className="row_one_col_one">
                            {title}
                        </Col>
                    </Row>
                    <Row className="row_two">
                        <Col span={24} className="row_two_col_one">
                            <Input bordered={false} value={value} className="row_two_col_one_textarea" onChange={(e)=>{
                                const val = e.target.value;
                                const Obj = {[name]:{
                                    title,
                                    type,
                                    value:val,
                                    name,
                                    options,
                                    placeholder,
                                }}
                                set_form_data(Obj);
                            }} placeholder={placeholder} />
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
)( withRouter(CommonTextAreaText) );