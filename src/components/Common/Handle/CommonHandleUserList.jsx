import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {
    Row,
    Col,
    Modal,
    message,
} from "antd"
import {
    DeleteUserListDataAction,
    EditUserListDataAction,
} from "../../../redux/actions"
import {
    SettingTwoTone,
    DeleteTwoTone,
    ExclamationCircleOutlined,
} from '@ant-design/icons';
import "./CommonHandleUserList.scss"
import {
    CommonHandleModalsUserListComponent,
} from "./Modals"

const { confirm } = Modal;

class CommonHandleUserList extends Component{

    state = {
        CommonHandleModalsUserListStatus:false,
        title: "编辑会员",
        editData : {
            account : {
                type:"text",
                name:"account",
                title:"账号",
                value:"",
                placeholder:"请输入账号",
                options:[],
            },
            age : {
                type:"number",
                name:"age",
                title:"年龄",
                value:"",
                placeholder:"请输入年龄",
                options:[],
            },
            county : {
                type:"text",
                name:"county",
                title:"区",
                value:"",
                placeholder:"请输入区",
                options:[],
            },
            create_time : {
                type:"time",
                name:"create_time",
                title:"创建时间",
                value:"",
                placeholder:"请输入创建时间",
                options:[],
            },
            current_time : {
                type:"time",
                name:"current_time",
                title:"更新时间",
                value:"",
                placeholder:"请输入更新时间",
                options:[],
            },
            header : {
                type:"icon",
                name:"header",
                title:"头像",
                value:"",
                placeholder:"请输入头像",
                options:[],
            },
            invit : {
                type:"text",
                name:"invit",
                title:"推荐码",
                value:"",
                placeholder:"请输入推荐码",
                options:[],
            },
            pid : {
                type:"select",
                name:"pid",
                title:"上级ID",
                value:"",
                placeholder:"请输入上级ID",
                options:[
                    
                ],
            },
            province:{
                type:"text",
                name:"province",
                title:"省",
                value:"",
                placeholder:"请输入省", 
                options:[],
            },
            region:{
                type:"text",
                name:"region",
                title:"区域",
                value:"",
                placeholder:"请输入区域", 
                options:[],
            },
            status:{
                type:"switch",
                name:"status",
                title:"状态",
                value:false,
                placeholder:"请输入状态", 
                options:[],   
            }
        }
    }

    componentDidMount(){
        const {
            record = {},
        } = this.props;
        //给表单赋值
        const {editData} = this.state;
        const {UserTreeOptionsData} = this.props;
        const data = Object.keys(editData).reduce( (prev,item)=>{
            if(item === "pid"){
                if( parseInt(record[item]) === 0 ){
                    return {...prev,[item]:{...editData[item],value:record[item],options:[{id:record.id,pid:record.pid,title:"顶级",value:0}]}} 
                }else{
                    return {...prev,[item]:{...editData[item],value:record[item],options:UserTreeOptionsData}} 
                }
            }else{
                return {...prev,[item]:{...editData[item],value:record[item]}} 
            }
                    
        },{} )
        this.setState({editData:{...data}});
    }

    componentWillUnmount(){
        this.setState = ()=>false;
    }

    render(){
        const {
            CommonHandleModalsUserListStatus,
            title,
            editData,
        } = this.state;
        const {
            record,
        } = this.props;
        return (
            <>
                <div className="CommonHandleUserListComponent">
                    <Row className="content">
                        <Col span={12} className="content_col_one">
                            <SettingTwoTone className="content_col_one_icon" onClick={
                                ()=>{
                                    this.setState({CommonHandleModalsUserListStatus:true});
                                }
                            } />                    
                        </Col>
                        <Col span={12} className="content_col_two">
                            <DeleteTwoTone twoToneColor="#eb2f96" className="content_col_two_icon" onClick={()=>{
                                confirm({
                                    title: '删除',
                                    icon: <ExclamationCircleOutlined />,
                                    content: '是否删除当前行？',
                                    onOk : async()=>{
                                        const {searchData} = this.props.UserListData;
                                        const param = {...searchData};
                                        const res = await this.props.DeleteUserListDataAction(record.id,param);
                                        if(res){
                                            message.success(res) 
                                            this.setState({CommonHandleModalsUserListStatus:false});
                                        }
                                    },
                                    onCancel : ()=>{
                                      message.success("取消");
                                    },
                                });
                            }} />
                        </Col>
                    </Row>
                </div>
                <CommonHandleModalsUserListComponent {...Object.assign(
                    {},
                    {
                        CommonHandleModalsUserListStatus,
                        title,
                        editData,
                    },
                    {
                        set_form_data : (Obj)=>{
                            this.setState({...Obj},()=>{
                                console.log( this.state )
                            })
                        },
                        //重置当前表单
                        reset_form_data :()=>{
                            const {editData} = this.state;
                            const data = Object.keys(editData).reduce( (prev,item)=>{
                                return {...prev,[item]:{...editData[item],value:record[item]}}         
                            },{} )
                            this.setState({editData:{...data}});
                        },
                        //更新数据
                        save_form_data : async()=>{
                            const {editData} = this.state;
                            const editObj = Object.values(editData).reduce( (prev,item)=>{
                                return {...prev,[item.name]:item.value}
                            } ,{id:record["id"]});
                            const {searchData} = this.props.UserListData;
                            const res = await this.props.EditUserListDataAction(editObj,searchData);
                            if(res){
                                message.success(res) 
                                this.setState({CommonHandleModalsUserListStatus:false});
                            }
                        }
                    }
                )}></CommonHandleModalsUserListComponent>
            </>
        );
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
        UserListData : store.UserListData,
        UserTreeOptionsData : store.UserTreeOptionsData,
    }),{
        DeleteUserListDataAction,
        EditUserListDataAction,
    }
)( withRouter( CommonHandleUserList ) )



