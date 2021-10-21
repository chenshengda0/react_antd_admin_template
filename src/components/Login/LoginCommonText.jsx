import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {
    LoginFormInputTextareaComponent,
    LoginFormInputPasswordComponent,
} from "./FormInput"
import {
    Row,
    Col,
} from "antd"

class LoginCommonText extends Component{

    renderComponent = ()=>{
        const {
            type="password",
        } = this.props;
        switch (type) {
            case "password":
                return (
                    <LoginFormInputPasswordComponent {...this.props}></LoginFormInputPasswordComponent>
                )
        
            default:
                return (
                    <LoginFormInputTextareaComponent {...this.props}></LoginFormInputTextareaComponent>
                )
        }
    }

    render(){
        return (
            <>
                <div className="LoginCommonTextComponent">
                    <Row style={{
                        height:"80px",
                    }}>
                        <Col span="24" style={{
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
)( withRouter( LoginCommonText ) );