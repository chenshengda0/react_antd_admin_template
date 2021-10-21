import {Component} from "react"
import {connect} from "react-redux"
import "./HomeCommonHeader.scss"
import {
    SetPopsPopsDataAction,
    toLogoutAction,
} from "../../../redux/actions"
import {
    WithComponentCommonContainer,
} from "../../../container"
import {
    Row,
    Col,
    Breadcrumb,
    Menu, 
    Dropdown,
    message,
} from "antd"
import HomeCommonScreenFull from "./HomeCommonScreenFull"

class HomeCommonHeader extends Component{

    goUserPage = ()=>{
        this.props.SetPopsPopsDataAction({PersonalPopsComponentStatus:true});
    }

    toLogOut = ()=>{
        const Obj = {
            title : "退出登陆？",
            icon : "LogoutOutlined",
            content : "确定退出登陆嘛？",
            onOk : async()=>{
                const res = await this.props.toLogoutAction();
                res && message.success(res);
                this.props.history.push({
                    pathname : "/home_login",
                });
            },
        }
        this.props.toConfirm(Obj);
    }

    //打开右侧弹出层
    toOpenPopsPage = ()=>{
        this.props.SetPopsPopsDataAction({SettingPopsComponentStatus:true});
    }

    setMenu = ()=>{
        return (
            <Menu>
                <Menu.Item onClick={()=>this.goUserPage()}>
                    <div className="toSet">
                        个人中心
                    </div>
                </Menu.Item>
                <Menu.Item  onClick={()=>this.toLogOut()}>
                    <div className="toLogout">
                        退出登陆
                    </div>
                </Menu.Item>
            </Menu>
        )
    }

    render(){
        const path = this.props.location.pathname;
        const {SystemMenusData,iconMap} =  this.props;
        const current = SystemMenusData.find( item => item.key === path )||{};
        const {collapsed} = this.props;
        const {icons} = this.props.SystemConfigData;
        const current_routes = current.titles || [];
        return (
            <>
                <div className="HomeCommonHeaderComponent">
                    <Row className="content">
                        {/*缩放菜单*/}
                        <Col span={1} className="content_col_one">
                            {
                                collapsed 
                                ?
                                (
                                    <iconMap.MenuUnfoldOutlined className="content_col_one_icon" onClick={ ()=>this.props.toggle() }/>
                                )
                                :
                                (
                                    <iconMap.MenuFoldOutlined className="content_col_one_icon" onClick={ ()=>this.props.toggle() }/>
                                )
                            }   
                        </Col>
                        {/*面包屑*/}
                        <Col span={11} className="content_col_two">
                            <Breadcrumb separator=">">
                                {
                                    current_routes.map( (item,index)=>{
                                        return (
                                            <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
                                        )
                                    } )
                                }
                            </Breadcrumb>
                        </Col>
                        <Col span={8} className="content_col_three"></Col>
                        <Col span={1} className="content_col_four">
                            <HomeCommonScreenFull></HomeCommonScreenFull>
                            
                        </Col>
                        <Col span={1} className="content_col_five" onClick={()=>this.toOpenPopsPage()}>
                            <iconMap.SettingOutlined className="content_col_five_icon" />
                        </Col>
                        <Col span={2} className="content_col_six">
                        {/*下拉菜单*/}
                        <Dropdown overlay={this.setMenu()} placement="bottomRight">
                            <Row className="content_col_six_box">
                                <Col span={16} className="content_col_six_box_col_one">
                                    <img src={icons.headerIcon} alt="" />
                                </Col>
                                <Col span={8} className="content_col_six_box_col_two">
                                    <iconMap.CaretDownOutlined className="content_col_six_box_col_two_icon" />
                                </Col>
                            </Row>
                        </Dropdown>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }

}

export default connect(
    store => ({
        SystemMenusData : store.SystemMenusData,
    }),{
        SetPopsPopsDataAction,
        toLogoutAction,
    }
)( WithComponentCommonContainer(HomeCommonHeader) );

