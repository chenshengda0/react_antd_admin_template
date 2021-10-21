import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonTextAreaSelect.scss"
import {
    Row,
    Col,
    TreeSelect,
} from "antd"
class CommonTextAreaSelect extends Component{

    render(){
        const {
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
        return (
            <>
                <div className="CommonTextAreaSelectComponent">
                    <Row className="row_one">
                        <Col span={24} className="row_one_col_one">
                            {title}
                        </Col>
                    </Row>
                    <Row className="row_two">
                        <Col span={24} className="row_two_col_one">
                        <TreeSelect
                            className="row_two_col_one_textarea"
                            value={value}
                            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                            treeData={options}
                            placeholder={placeholder}
                            treeDefaultExpandAll
                            onChange={(...param)=>{
                                const val = param[0];
                                const Obj = {[name]:{
                                    title,
                                    type,
                                    value:val,
                                    name,
                                    options,
                                    placeholder,
                                }}
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
    store=>({
        SystemConfigData : store.SystemConfigData,
    }),{

    }
)( withRouter(CommonTextAreaSelect) );