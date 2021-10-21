import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./SettingPops.scss"
import {
    Drawer,
    Row,
    Col,
    message,
} from "antd"
import {
    SetPopsPopsDataAction,
} from "../../redux/actions"
import {
    CommonHandleButtonComponent,
    //上传图片
    CommonUploadImgComponent,
    CommonSpaceComponent,
} from "../Common"

class PersonalPops extends Component{

    state = {
        headerImg:"",
    }

    render(){
        const {
            headerImg,
        } = this.state;
        const {PersonalPopsComponentStatus} = this.props.PopsPopsData;
        return (
            <>
                <Drawer title="个人中心" placement={"right"} onClose={
                    ()=> {
                        this.props.SetPopsPopsDataAction({
                            SettingPopsComponentStatus:false
                        })
                    }
                } width={300} visible={PersonalPopsComponentStatus} footer={
                    <CommonHandleButtonComponent {...Object.assign(
                        {},
                        {comment:"提交"},
                        {
                            toHandle : ()=>{
                                message.success("提交表单123");
                            }
                        }
                 )}></CommonHandleButtonComponent>
                }>

                    <Row>
                        <Col span={24}>
                            <CommonUploadImgComponent {...Object.assign(
                                {},
                                {imageUrl:headerImg},
                                {name:"headerImg"},//标识对应哪个图片
                                {title:"上传头像"},
                                {
                                    save_img : (name,imageUrl)=>{
                                        this.setState({[name]:imageUrl})
                                    }
                                },
                            )}></CommonUploadImgComponent>
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
    }
)( withRouter( PersonalPops ) );