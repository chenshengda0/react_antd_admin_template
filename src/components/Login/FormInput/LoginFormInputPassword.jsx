import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./LoginFormInputPassword.scss"
import {
    Row,
    Col,
    Input,
} from "antd"
import * as iconMap from '@ant-design/icons';

class LoginFormInputPassword extends Component{

    render(){
        const {
            icon = "LockOutlined",
            title="密码",
            type="password",
            value="",
            name="name",
            placeholder="请输入名字",
            options = [],
            set_form_data = (Obj)=>{
                this.props.set_form_data(Obj);
            }
        } = this.props;
        const CurIcon = iconMap[icon];
        return (
            <>
                <div className="LoginFormInputPasswordComponent">
                    <Row className="content">
                        <Col span={24} className="content_row_one">
                            <Input.Password
                                className = "content_row_one_textarea"
                                prefix={<CurIcon className="prefIcon" />}
                                placeholder={placeholder}
                                iconRender={visible => (visible ? <iconMap.EyeTwoTone /> : <iconMap.EyeInvisibleOutlined />)}
                                value={value}
                                onChange = {(e)=>{
                                    const val = e.target.value;
                                    const Obj = {
                                        [name]: {
                                            icon,
                                            title,
                                            type,
                                            value:val,
                                            name,
                                            placeholder,
                                            options,
                                        }
                                    }
                                    set_form_data(Obj);
                                }}
                            />
                        </Col>
                    </Row>
                </div>
            </>
        )
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
    }),{

    }
)( withRouter( LoginFormInputPassword ) );