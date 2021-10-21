import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./HomeUserStructSearchForm.scss"
import {
    Row,
    Col,
    Input,
    Button,
} from "antd"
import { 
    SearchOutlined, 
} from '@ant-design/icons';

class HomeUserStructSearchForm extends Component{

    render(){
        const {
            searchData = {
                searchAccount : {
                    title : "账号",
                    name : "searchAccount",
                    value : "17671456824",
                    placeholder : "请输入要搜索的账号",
                    type : "text",
                },
                searchInvit : {
                    title : "邀请码",
                    name : "searchInvit",
                    value : "UHJXDL",
                    placeholder : "请输入要搜索的邀请码",
                    type : "text",
                },
            },
            set_form_data = (Obj)=>{
                this.props.set_form_data(Obj)
            },
            to_search = (param)=>{
                    this.props.to_search(param)
            },
        } = this.props;
        const searchListData = Object.keys(searchData);
        return (
            <>
                <div className="HomeUserStructSearchFormComponent">
                    <Row className="content">
                        {
                           searchListData.map( (item)=>{
                               return (
                                    <Col span={8} key={item} className="content_text">
                                        <Input value={searchData[item].value} className="content_text_input" onChange={
                                            (e)=>{
                                                const val = e.target.value;
                                                const Obj = searchListData.reduce( (prev,row)=>{
                                                    const current = row === item ? {[row]:{ ...searchData[row],value:val }} : {[row]:{...searchData[row]}}
                                                    return {...prev,...current}
                                                } ,{})
                                                set_form_data(Obj);
                                            }
                                        } bordered={false} placeholder={searchData[item].placeholder} />
                                    </Col>
                               )
                           } ) 
                        }

                        <Col span={8} className="content_col_two">
                            <Button type="primary" icon={<SearchOutlined />} className="content_col_two_btn" shape={"round"} onClick={
                                ()=>{
                                    to_search(111);
                                }
                            }>
                                搜索
                            </Button>
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
)( withRouter( HomeUserStructSearchForm ) );