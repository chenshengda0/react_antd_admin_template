import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonSelect.scss"
import {
    Select,
    Row,
    Col,
} from "antd"

const { Option } = Select;

class CommonSelect extends Component{

    handleChange = (param)=>{
        console.log(param)
    }

    render(){
        const {
            title="每页显示记录条数",
            name="pageSize",
            val="100",
            options=[
                {name:"10条",value:"10"},
                {name:"30条",value:"30"},
                {name:"50条",value:"50"},
            ],
            set_form_data = (Obj)=>{
                this.props.set_form_data(Obj)
            },
        } = this.props;
        return (
            <>
                <div className="CommonSelectComponent">
                    <Row className="content">
                        <Col span={24} className="content_row_one">
                            {title}
                        </Col>
                        <Col span={24} className="content_row_two">
                            <Select defaultValue={val.toString()} className="content_row_two_select" bordered={false} onChange={
                                (val)=>{
                                    set_form_data({[name]:val})
                                }
                            }>
                                {
                                    options.map( (item,index)=>{
                                        return (
                                            <Option value={item.value.toString()} key={index}>{item.name}</Option>
                                        )
                                    } )
                                }
                            </Select>
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
)( withRouter( CommonSelect ) );