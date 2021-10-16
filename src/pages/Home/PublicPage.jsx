import React,{Component} from "react"
import {connect} from "react-redux"
import {withRouter,Route,Switch,Redirect} from "react-router-dom"
import { Layout} from 'antd';
import { Scrollbars } from "react-custom-scrollbars";
import {
    HomeCommonLogoComponent,
    HomeCommonMenuComponent,
    HomeCommonHeaderComponent,
    HomeCommonTopRouteComponent,
} from "../../components/Home/Common"

import {
    SettingPopsComponent,
    PersonalPopsComponent,
} from "../../components/Pops"
import * as sonPages from "./SonRoutePage"
import {
    WithAutoLogoutContainer,
} from "../../container"



const { Header, Sider,Footer } = Layout;
class PublicPage extends Component{

    state = {
        //是否缩放菜单
        collapsed : false,
        current_route : [],
    }

    UNSAFE_componentWillMount(){
        const {SystemMenusData} = this.props;
        const current_route = SystemMenusData.reduce( (pre,item)=>{
            return item.is_route ? [...pre,item] : [...pre];  
        },[] )
        this.setState({current_route})
    }

    componentWillUnmount(){
        this.setState = ()=>false;
    }

    render(){
        const {collapsed,current_route} = this.state;
        //console.log( current_route )
        const {company,copyright} = this.props.SystemConfigData;
        return (
            <>
                <Layout style={{height:"100vh",}}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div style={{height:"64px",}}>
                        <HomeCommonLogoComponent {...Object.assign({},{collapsed})}></HomeCommonLogoComponent>
                    </div>
                    <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}  style={{height:"calc(100% - 64px)"}}>
                        <HomeCommonMenuComponent></HomeCommonMenuComponent>
                    </Scrollbars>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0,backgroundColor:"#FFF" }}>
                        <HomeCommonHeaderComponent {...Object.assign({},{collapsed},{toggle:()=>{
                            const {collapsed} = this.state;
                            this.setState({collapsed:!collapsed})
                        }})}></HomeCommonHeaderComponent>
                    </Header>
                    <div style={{height:"40px",boxShadow:"0px 3px 6px 0px #ccc",backgroundColor:"#FFF"}}>
                        <HomeCommonTopRouteComponent></HomeCommonTopRouteComponent>
                    </div>
                    {/*二级路由*/}
                    <Switch>
                        {
                            current_route.map( item=>{
                                return (<Route path={item.key} key = {item.id} component={sonPages[item.component]}/>)
                            } )
                        }
                        <Redirect to={current_route[0].key} />
                    </Switch>
                <Footer style={{ textAlign: 'center' }}>{`${company}${copyright}`}</Footer>
                </Layout>
            </Layout>
            <SettingPopsComponent></SettingPopsComponent>
            <PersonalPopsComponent></PersonalPopsComponent>
            </>
        );
    }
}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
        SystemMenusData : store.SystemMenusData,
    }),{

    }
)( withRouter( WithAutoLogoutContainer( PublicPage ) ) );