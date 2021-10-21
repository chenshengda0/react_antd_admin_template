import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {
    LoginFormHandleButtonComponent,
} from "./FormHandle"
import {
    Row,
    Col,
} from "antd"

class LoginCommonBottom extends Component{

    renderComponent = ()=>{
        const {
            type,
        } = this.props;
        switch (type) {
            case "primary":
            case "dashed":
            default:
                return (
                    <LoginFormHandleButtonComponent {...this.props}></LoginFormHandleButtonComponent>
                )
                
        }
    }

    render(){
        return (
            <>
                <div className="LoginCommonBottomComponent">
                    <Row style={{
                        height:"60px"
                    }}>
                        <Col span={24} style={{
                            position:"absolute",
                            width:"100%",
                            top:"50%",
                            transform:"translateY(-50%)",
                        }}>
                            {
                                this.renderComponent()
                            }
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
)( withRouter(LoginCommonBottom) )