import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonHtmlHeader"
import {Helmet} from "react-helmet";

class CommonHtmlHeader extends Component{

    render(){
        const path = this.props.location.pathname;
        const {company} = this.props.SystemConfigData;
        const {SystemMenusData} =  this.props;
        const current = SystemMenusData.find( item => item.key === path )||{};
        const titles = current.titles || [];
        const newTitle = [company,...titles].join(" ") 
        return (
            <div>
               <Helmet>
                   <title>{newTitle}</title>
                   <meta name="description" content="美团网:美食攻略,外卖网上订餐,酒店预订,旅游团购,飞机票火车票,电影票,ktv团购吃喝玩乐全都有!店铺信息查询,商家评分/评价一站式生活服务网站"></meta>
                   <meta name="keywords" content="美食,团购,外卖,网上订餐,酒店,旅游,电影票,火车票,飞机票"></meta>
                   <meta http-equiv="Refresh" content="3600;url=/#/common/dashboard_home"></meta>
               </Helmet>
            </div>
        );
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
        SystemMenusData : store.SystemMenusData,
    }),{

    }
)( withRouter( CommonHtmlHeader ) )