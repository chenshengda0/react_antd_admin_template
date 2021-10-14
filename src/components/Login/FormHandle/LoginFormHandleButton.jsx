import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./LoginFormHandleButton.scss"
import {
    Row,
    Col,
    Button,
} from "antd"

class LoginFormHandleButton extends Component{

    render(){
        const {
            type = "primary",
            placeholder = "登陆",
            shape = "round",
            toHandle = ()=>{
                this.props.toHandle()
            }
        } = this.props;

        return (
            <>
                <div className="LoginFormHandleButtonComponent">
                    <Row className="content">
                        <Col span="24" className="content_row_one">
                            <Button type={type} className="content_row_one_handle" shape={shape} onClick={()=>{
                                toHandle()
                            }}>{placeholder}</Button>
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
)( withRouter( LoginFormHandleButton ) )