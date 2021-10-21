import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./HomeDashboardArea.scss"
import {
    Row,
    Col,
} from "antd"
import { Area } from '@ant-design/charts';
import {
    InitHomeDashboardAreaDataAction,
} from "../../../redux/actions"

class HomeDashboardArea extends Component{

    componentDidMount(){
        this.props.InitHomeDashboardAreaDataAction();
    }

    render(){
        const {HomeDashboardAreaData} = this.props;
        const loading = HomeDashboardAreaData.length === 0 ? false : true;
        const config = {
            data: HomeDashboardAreaData,
            xField: 'date',
            yField: 'value',
            seriesField: 'country',
          };
        return (
            <>
                {
                    loading 
                    ?
                    (
                        <div className="HomeDashboardAreaComponent">
                            <Row className="content"> 
                                <Col span={24} className="content_row_one">
                                    面积图
                                </Col>
        
                                <Col span={24} className="content_row_two">
                                    <Area {...config} />
                                </Col>
                            </Row>
                        </div>
                    )
                    :
                    (
                        <></>
                    ) 
                }

            </>
        );
    }

}


export default connect(
    store => ({
        HomeDashboardAreaData : store.HomeDashboardAreaData,
        SystemConfigData : store.SystemConfigData,
    }),{
        InitHomeDashboardAreaDataAction
    }
)( withRouter(HomeDashboardArea) );