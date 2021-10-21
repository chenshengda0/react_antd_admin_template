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
            name = "pageOptions",
            pageOptions={
                10:{name:"10条",value:"10",isSelect:false},
                30:{name:"30条",value:"30",isSelect:true},
                50:{name:"50条",value:"50",isSelect:false},
            },
            set_form_data = (Obj)=>{
                this.props.set_form_data(Obj)
            },
        } = this.props;
        const currentRow = Object.values(pageOptions).find( item => item.isSelect  ) || Object.values(pageOptions)[0];
        return (
            <>
                <div className="CommonSelectComponent">
                    <Row className="content">
                        <Col span={24} className="content_row_one">
                            {title}
                        </Col>
                        <Col span={24} className="content_row_two">
                            <Select defaultValue={currentRow.value} className="content_row_two_select" bordered={false} onChange={
                                (val)=>{
                                    //修改options
                                    const Obj = Object.keys(pageOptions).reduce( (prev,item)=>{
                                        return pageOptions[item].value === val ? {...prev,[item]:{...pageOptions[item],isSelect:true}} : {...prev,[item]:{...pageOptions[item],isSelect:false}};
                                    },{} )
                                    set_form_data({[name]:Obj})
                                }
                            }>
                                {
                                    Object.values(pageOptions).map( (item,index)=>{
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