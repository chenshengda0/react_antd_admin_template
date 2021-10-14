import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./LoginFormInputTextarea.scss"
import {
    Row,
    Col,
    Input,
} from "antd"
import * as iconMap from '@ant-design/icons';

class LoginFormInputTextarea extends Component{

    render(){
        const {
            icon = "UserOutlined",
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
        const CurIcon = iconMap[icon];
        return (
            <>
                <div className="LoginFormInputTextareaComponent">
                    <Row className="content">
                        <Col span={24} className="content_row_one">
                            <Input 
                                className="content_row_one_textarea"
                                prefix={<CurIcon className="prefIcon" />}
                                value = {value}
                                onChange = {
                                    (e)=>{
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
                                    }
                                }
                                placeholder = {placeholder}
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
)( withRouter( LoginFormInputTextarea ) );