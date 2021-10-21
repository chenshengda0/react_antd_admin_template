import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonObjectInput.scss"
import {
    Row,
    Col,
    Input,
} from "antd"

//一维对象编辑
class CommonObjectInput extends Component{

    render(){
        const {
            title="显示参数设置",
            name = "name",
            objectData = {
                one : "one",
                two : "two",
            },
            set_form_data = (Obj)=>{
                this.props.set_form_data(Obj);
            },
        } = this.props;
        //对象转list
        const editList = Object.keys(objectData).reduce( (prev,item)=>{
            const current_data = {
                key : item,
                value : objectData[item]
            }
            return [...prev,current_data];
        },[]) 

        return (
            <>
                <div className="CommonObjectInputComponent">
                    <Row className="content">
                        <Col span = {24} className="content_title">
                            {title}
                        </Col>
                        <Col span={24} className="content_list">
                            {
                                editList.map( (item)=>{
                                    return (
                                        <Row key={item.key} className="box">
                                            <Col span={8} className="box_row_one">
                                                {item.key}
                                            </Col>
                                            <Col span={16} className="bow_row_two">
                                                <Input className="input_box" value={item.value} onChange={
                                                    (e)=>{
                                                        //this.props.set_form_object_data(name,item.key,e)
                                                        const Obj = Object.keys(objectData).reduce( (prev,row)=>{
                                                            const val = e.target.value;
                                                            console.log(row)
                                                            const current = item.key === row ? {[row]:val} : {[row]:objectData[row] }; 
                                                            return {...prev,...current};
                                                        } ,{})
                                                        set_form_data({[name]:Obj})
                                                    }
                                                } bordered={false}  placeholder="请输入参数值" />
                                            </Col>
                                        </Row>
                                    )
                                } )
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
 )( withRouter( CommonObjectInput ) )