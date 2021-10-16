import {Component} from "react"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {
    Row,
    Col,
    message,
} from "antd"
import "./Home.scss"
import {
    LoginHeaderComponent,
    LoginCommonTextComponent,
    LoginCommonBottomComponent,
} from "../../components/Login"
import {
    toLoginAction,
} from "../../redux/actions"
import {
    WithAutoLoginContainer,
} from "../../container"

class Home extends Component{

    state = {
        title : "后台管理系统",
        record : {
            username : "guest",
            password : "guest",
            code : "guest",
        },
        formData : {
            username : {
                type : "text",
                name : "username",
                icon : "UserOutlined",
                title : "登陆名",
                value : "",
                placeholder : "请输入登陆名(admin / guest)",
                options : [],
            },
            password : {
                type : "password",
                name : "password",
                icon : "LockOutlined",
                title : "密码",
                value : "",
                placeholder : "请输入密码(admin / guest)",
                options : [],
            },
            code : {
                type : "text",
                name : "code",
                icon : "InsuranceOutlined",
                title : "验证码",
                value : "",
                placeholder : "请输入验证码(admin / guest)",
                options : [],
            },
        },
        handleData : {
            toSublime : {
                name : "toSublime",
                type : "primary",
                placeholder : "登陆",
                shape : "round",
                toHandle : ()=>{
                    this.toSubmite()
                }
            },
            toReset : {
                name : "toReset",
                type : "dashed",
                placeholder : "重置",
                shape : "round",
                toHandle : ()=>{
                    this.autoFill()
                }
            }
        }
    }

    componentDidMount(){
        this.autoFill();
    }

    componentWillUnmount(){
        this.setState = ()=>false;
    }

    autoFill = ()=>{
        const {record,formData} = this.state;
        const newFormData = Object.keys(formData).reduce( (prev,cur)=>{
            return {...prev,[cur]:{...formData[cur],value:record[cur]}}
        },{} )
        this.setState({formData:newFormData},()=>{
            console.log( this.state )
        })
    }

    toSubmite = window.debounce(async()=>{
        const {formData}=this.state;
        const formDataObj = Object.values(formData).reduce( (prev,cur)=>{
            return {...prev,[cur.name]:cur.value}
        },{} )
        const data = await this.props.toLoginAction(formDataObj);
        data && message.success(data);
        this.props.history.push({
            pathname : '/common',
        });
    },2000)

    render(){
        const {
            title,
            formData,
            handleData,
        } = this.state;
        const formDataList = Object.values(formData);
        const handleDataList = Object.values(handleData);
        return (
            <>
                <div className="LoginHomePage">
                    <Row className="LoginHomePageContent">
                        <Col span={24}>
                            <LoginHeaderComponent {...Object.assign(
                                {},
                                {
                                    title,
                                },
                                {}
                            )}></LoginHeaderComponent>
                        </Col>
                        {
                            formDataList.map( (item)=>{
                                return (
                                    <Col span={24} key={item.name}>
                                        <LoginCommonTextComponent {...Object.assign(
                                            {},
                                            {
                                                ...item,
                                            },
                                            {
                                                set_form_data : (Obj)=>{
                                                    const newFormData = {...formData,...Obj}
                                                    this.setState({formData:newFormData},()=>{
                                                        console.log(this.state)
                                                    });
                                                }
                                            }
                                        )}></LoginCommonTextComponent>
                                    </Col>
                                )
                            } )
                        }
                        {
                            handleDataList.map( (item)=>{
                                return (
                                    <Col span={24} key={item.name}>
                                        <LoginCommonBottomComponent {...item}></LoginCommonBottomComponent>
                                    </Col>
                                )
                            } )
                        }

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
        toLoginAction,
    }
)( withRouter( WithAutoLoginContainer(Home) ) );