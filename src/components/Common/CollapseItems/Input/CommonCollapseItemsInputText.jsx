import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonCollapseItemsInputText.scss"
import {
    Row,
    Col,
    Input,
} from "antd"

class CommonCollapseItemsInputText extends Component{

    render(){
        const {
            title = "账号",
            name = "account",
            value = "",
            placeholder = "请输入要搜索的账号",
            set_form_data = (Obj)=>{
                this.props.set_form_data(Obj);
            }
        } = this.props;
        return (
            <>
                <div className="CommonCollapseItemsInputTextComponent">
                    <Row className="content">
                        <Col span={24} className="content_col_one">
                            <Input addonBefore={title}  className="content_col_one_text" placeholder={placeholder} value={value} onChange={(e)=>{
                                const val = e.target.value;
                                const current = {
                                    title,
                                    name,
                                    value:val,
                                    placeholder,
                                }
                                set_form_data({[name]:current});
                            }} />
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
)( withRouter( CommonCollapseItemsInputText ) );