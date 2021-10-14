import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./HomeCommonTopRoute.scss"
import {
    SetHomeCommonTopRouteDataAction,
} from "../../../redux/actions"
import {Scrollbars} from "react-custom-scrollbars"

class HomeCommonTopRoute extends Component{

    add_route = (item)=>{
        this.props.history.push({
            pathname : `${item.route}`,
        })
    }

    render(){
        const path = this.props.location.pathname;
        const {HomeCommonTopRouteData} = this.props;
        return (
            <>
                <div className="HomeCommonTopRouteComponent">
                <Scrollbars
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    hideTracksWhenNotNeeded={true}
                >
                    {
                        HomeCommonTopRouteData.map( (item) => {
                            return (
                                path === item.route 
                                ?
                                (
                                    <div key={item.route} className="item active">
                                        {item.title}
                                    </div>
                                ):
                                (
                                    <div key={item.route} className="item" onClick={()=>this.add_route(item)}> 
                                        {item.title}
                                    </div>
                                )

                            )
                        } )
                    }
                    </Scrollbars>
                </div>
            </>
        )
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
        HomeCommonTopRouteData : store.HomeCommonTopRouteData,
    }),{
        SetHomeCommonTopRouteDataAction,
    }
)( withRouter( HomeCommonTopRoute ) );