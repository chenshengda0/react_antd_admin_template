import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonInput.scss"
import {
    Row,
    Col,
    Input,
} from "antd"

class CommonInput extends Component{

    render(){
        const {
                name = "key",
                title = "名称",
                val = "value",
                set_form_data = (Obj)=>{
                    this.props.set_form_data(Obj)
                },
        } = this.props;
        return (
            <>
                <div className="CommonInputComponent">
                    <Row className="content">
                        <Col span = {24} className="content_row_one">
                            {title}
                        </Col>
                        <Col span={24} className="content_row_two">
                            <Input value={val} onChange={
                                (e)=>{
                                    const val = e.target.value;
                                    set_form_data({[name]:val}); 
                                }
                            } bordered={false}  placeholder={`请输入${title}`} />
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

    }
)( withRouter(CommonInput) );