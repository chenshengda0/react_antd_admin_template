import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./LoginHeader.scss"
import {
    Row,
    Col,
} from "antd"

class LoginHeader extends Component{

    render(){
        const {
            title = "用户登陆",
        } = this.props;
        return (
            <>
                <div className="LoginHeaderComponent">
                    <Row className="content">
                        <Col span={24} className="content_row_one">
                            {title}                   
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
)( withRouter( LoginHeader ) )