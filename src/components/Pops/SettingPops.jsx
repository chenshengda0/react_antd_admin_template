import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./SettingPops.scss"
import {Drawer, message} from "antd"
import {
    SetPopsPopsDataAction,
    SetSystemConfigDataAction,
} from "../../redux/actions"
import {
    CommonInputComponent,
    CommonInputDisableComponent,

    CommonHandleButtonComponent,
    CommonObjectInputComponent,
    CommonSpaceComponent,
    CommonSelectComponent,

} from "../Common"
import {
    Row,
    Col,
} from "antd"

class SettingPops extends Component{

    state = {
        uploadAction:"",
        company:"",
        copyright:"",
        title : "",//标题
        termList:{},
        payType : {},
    }

    componentDidMount(){
        const {SystemConfigData} = this.props;
        this.setState({...SystemConfigData})
    }

    //设置值
    set_form_data = (Obj)=>{
        this.setState({...Obj})
    }

    toClose = ()=>{
        this.props.SetPopsPopsDataAction({SettingPopsComponentStatus:false});
    }

    render(){
        const {
            company,
            copyright,
            uploadAction,
            title,
            termList,
            payType,
            pageOptions,
        } = this.state;
        const {SettingPopsComponentStatus} = this.props.PopsPopsData;

        return (
            <>
                <Drawer title="本地设置" placement={"right"} onClose={()=>this.toClose()} width={378} visible={SettingPopsComponentStatus} footer={
                    <CommonHandleButtonComponent {...Object.assign(
                        {},
                        {
                            comment : "提交",
                        },
                        {
                            toHandle : async()=>{
                                const data = await this.props.SetSystemConfigDataAction({...this.state})
                                data && message.success(data);
                                this.props.SetPopsPopsDataAction({SettingPopsComponentStatus:false});
                            },
                        }
                    )}></CommonHandleButtonComponent>
                }>

                    <Row>
                        <Col span={24}>
                            <CommonInputDisableComponent {...Object.assign(
                                {},
                                {
                                    name:"uploadAction",
                                    title:"图片上传路径",
                                    val:uploadAction,
                                },
                                {
                                    set_form_data : (Obj)=>{
                                        this.set_form_data(Obj);
                                    },
                                }
                            )}></CommonInputDisableComponent>
                        </Col>
                    </Row>
                    <CommonSpaceComponent></CommonSpaceComponent>

                    <Row>
                        <Col span={24}>
                            <CommonInputComponent {...Object.assign(
                                {},
                                {
                                    name:"company",
                                    title:"公司名",
                                    val:company,
                                },
                                {
                                    set_form_data : (Obj)=>{
                                        this.set_form_data(Obj);
                                    },
                                }
                            )}></CommonInputComponent>
                        </Col>
                    </Row>
                    <CommonSpaceComponent></CommonSpaceComponent>

                    <Row>
                        <Col span={24}>
                            <CommonInputComponent {...Object.assign(
                                {},
                                {
                                    name:"copyright",
                                    title:"版权号",
                                    val:copyright,
                                },
                                {
                                    set_form_data : (Obj)=>{
                                        this.set_form_data(Obj);
                                    },
                                }
                            )}></CommonInputComponent>
                        </Col>
                    </Row>
                    <CommonSpaceComponent></CommonSpaceComponent>

                    <Row>
                        <Col span={24}>
                            <CommonInputComponent {...Object.assign(
                                {},
                                {
                                    name:"title",
                                    title:"标题",
                                    val:title,
                                },
                                {
                                    set_form_data : (Obj)=>{
                                        this.set_form_data(Obj);
                                    },
                                }
                            )}></CommonInputComponent>
                        </Col>
                    </Row>
                    <CommonSpaceComponent></CommonSpaceComponent>

                    <Row>
                        <Col span={24}>
                            <CommonObjectInputComponent {...Object.assign(
                                {},
                                {
                                    title: "显示设置",
                                    name : "termList",
                                    objectData : termList,
                                },
                                {
                                    set_form_data : (Obj)=>{
                                        this.set_form_data(Obj);
                                    },
                                }
                            )}></CommonObjectInputComponent>
                        </Col>
                    </Row>
                    <CommonSpaceComponent></CommonSpaceComponent>

                    <Row>
                        <Col span={24}>
                            <CommonSelectComponent {...Object.assign(
                                {},
                                {
                                    title:"每页默认显示记录数",
                                    name : "pageOptions",
                                    pageOptions,
                                },
                                {
                                    set_form_data : (Obj)=>{
                                        this.set_form_data(Obj)
                                    },
                                },
                            )}></CommonSelectComponent>
                        </Col>
                    </Row>
                    <CommonSpaceComponent></CommonSpaceComponent>

                    <Row>
                        <Col span={24}>
                            <CommonObjectInputComponent {...Object.assign(
                                {},
                                {title: "支付方式"},
                                {name : "payType"},
                                {objectData : payType},
                                {
                                    set_form_data : (Obj)=>{
                                        this.set_form_data(Obj)
                                    },
                                },
                            )}></CommonObjectInputComponent>
                        </Col>
                    </Row>
                    <CommonSpaceComponent></CommonSpaceComponent>
                    
                </Drawer>
            </>
        );
    }
}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
        PopsPopsData : store.PopsPopsData,
    }),{
        SetPopsPopsDataAction,
        SetSystemConfigDataAction,
    }
)( withRouter( SettingPops ) );