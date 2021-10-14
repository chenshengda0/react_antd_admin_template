import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonEditorHtml.scss"
import {
    Row,
    Col,
    message,
} from "antd"
import {
    CopyOutlined,
} from '@ant-design/icons';
import {CopyToClipboard} from "react-copy-to-clipboard"

class CommonEditorHtml extends Component{

    render(){
        const {
            editorHtml = "<h1></h1>",
        } = this.props;
        return (
            <>
                <div className="CommonEditorHtmlComponent">
                    <Row className="content">
                        <Col span={24} className="content_row_one">
                            同步转换HTML                            
                                <CopyToClipboard text={editorHtml} onCopy={() => message.success("复制成功")}>
                                    <CopyOutlined style={{
                                        position:"absolute",
                                        top:"50%",
                                        right:"16px",
                                        transform: "translateY(-50%)",
                                    }} />
                                </CopyToClipboard>
                        </Col>
                        <Col span={24} className="content_row_two">
                            {editorHtml}
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
)( withRouter( CommonEditorHtml ) );