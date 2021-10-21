import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonInputDisable.scss"
import {
    Row,
    Col,
    Input,
    message,
} from "antd"
import {
    CopyOutlined,
  } from '@ant-design/icons';
import {CopyToClipboard} from "react-copy-to-clipboard"


class CommonInputDisable extends Component{

    render(){
        const {
            name = "name",
            title = "title",
            val = "val",
            set_form_data = (Obj)=>{
                this.props.set_form_data(Obj);
            },
        } = this.props;
        return (
            <>
                <div className="CommonInputDisableComponent">
                    <Row className="content">
                        <Col span = {24} className="content_row_one">
                            {title}
                            <CopyToClipboard text={val} onCopy={() => message.success("复制成功")}>
                                <CopyOutlined style={{
                                    position:"absolute",
                                    top:"50%",
                                    right:"0px",
                                    transform: "translateY(-50%)",
                                }} />
                            </CopyToClipboard>
                        </Col>
                        <Col span={24} className="content_row_two">
                            <Input defaultValue={val} disabled={true} onChange={
                                (e)=>{
                                    const val = e.target.value;
                                    set_form_data({[name]:val})
                                }
                            } bordered={false}  placeholder={`请输入${val}`} />
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
)( withRouter(CommonInputDisable) );