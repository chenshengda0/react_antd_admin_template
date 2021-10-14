import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {
    WithContentTempContainer,
    WithUserListPageContainer,
} from "../../../container"
import {
    Row,
    Col,
    Button,
    message,
} from "antd"
import CommonTextArea from "../../../components/Common/TextArea"
import {
    AddUserListDataAction,
} from "../../../redux/actions"


class Add extends Component{

    state = {
        record:{
            account:"",
            age:"",
            county:"", 
            create_time:"2021-10-21 20:00:00",
            current_time:"2021-10-21 20:00:00",
            header:"",
            invit:"",
            pid:1,
            province:"",
            region:"",
            status:false,
        },
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
        this.initEditData();
    }

    initEditData = ()=>{
        const {UserTreeOptionsData} = this.props;
        const {editData,record} = this.state;
        const newEditData = Object.keys(editData).reduce( (prev,item) => {
            if(item === "pid"){
                return {...prev,[item]:{...editData[item],value:record[item],options:UserTreeOptionsData}}
            }else{
                return {...prev,[item]:{...editData[item],value:record[item]}}
            }
            
        },{});
        this.setState({editData:newEditData});
    }

    render(){
        const {editData} = this.state;
        const editDataArr = Object.values(editData);
        return (
            <>
                <Row>
                    {
                        editDataArr.map( item=>{
                            return (
                                <Col span={24} key={item.name}>
                                    <CommonTextArea {...Object.assign(
                                        {},
                                        {
                                            ...item,
                                        },
                                        {
                                            set_form_data : (Obj)=>{
                                                const currentEditData = {...editData,...Obj};
                                                this.setState({editData:currentEditData})
                                            },
                                        }
                                    )}></CommonTextArea>
                                </Col>
                            )
                        } )
                    }
                </Row>
                <Row>
                    <Col span={12} style={{
                        height:"80px",
                    }}>
                        <Button type="dashed" shape="round" style={{
                            width:"50%",
                            position:"absolute",
                            top:"50%",
                            left:"50%",
                            transform:"translate(-50%,-50%)"
                        }} onClick={()=>{
                            this.initEditData();
                        }}>重置</Button>
                    </Col>
                    <Col span={12} style={{
                        height:"80px",
                    }}>
                        <Button type="primary" shape="round" style={{
                            width:"50%",
                            position:"absolute",
                            top:"50%",
                            left:"50%",
                            transform:"translate(-50%,-50%)"
                        }} onClick={ 
                            async()=>{
                                const {editData} = this.state;
                                const reqParam = Object.values(editData).reduce( (prev,item)=>{
                                    return {...prev,[item.name]:item.value}
                                } ,{})
                                const res = await this.props.AddUserListDataAction(reqParam);
                                res && message.success(res); 
                                this.initEditData(); 
                            }
                        }>提交</Button>
                    </Col>
                </Row>
            </>
        );
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
        UserTreeOptionsData : store.UserTreeOptionsData,
    }),{
        AddUserListDataAction,
    }
)( withRouter( WithContentTempContainer( WithUserListPageContainer(Add) ) )  )