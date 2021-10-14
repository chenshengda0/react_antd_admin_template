import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./HomeDashboardTopList.scss"
import {
    Row,
    Col,
} from "antd"
import {
    InitHomeDashboardTopListDataAction,
} from "../../../redux/actions"


class HomeDashboardTopList extends Component{

    componentDidMount(){
        this.props.InitHomeDashboardTopListDataAction();
    }

    render(){
        const {HomeDashboardTopListData} = this.props;
        const loading = HomeDashboardTopListData.length === 0 ? false : true;
        return (
            <>
                {
                    loading 
                    ? 
                    (
                        <Row className="HomeDashboardTopListComponent">
                            {
                                HomeDashboardTopListData.map( (item)=>{
                                    return (
                                        <Col span={6} className="content" key={item.name}>
                                            <Row className="content_box">
                                                <Col span={12} className="content_box_col_one">
                                                    {item.icon}
                                                </Col>
                                                <Col span={12} className="content_box_col_two">
                                                    <Row className="content_box_col_right">
                                                        <Col span={24} className="content_box_col_right_row_one">
                                                            {item.title}
                                                        </Col>
                                                        <Col span={24} className="content_box_col_right_row_two">
                                                            {item.num}
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    )
                                } )
                            }

                        </Row>
                    ) 
                    : 
                    (
                        <></>
                    )
                }
            </>
        )
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
        HomeDashboardTopListData : store.HomeDashboardTopListData,
    }),{
        InitHomeDashboardTopListDataAction,
    }
)( withRouter( HomeDashboardTopList ) );