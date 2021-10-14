import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./HomeDashboardBar.scss"
import { Column } from '@ant-design/charts';
import {
    Row,
    Col,
} from "antd"
import {
    InitHomeDashboardBarDataAction,
} from "../../../redux/actions"

class HomeDashboardBar extends Component{

    componentDidMount(){
        this.props.InitHomeDashboardBarDataAction();
    }

    render(){
        const {HomeDashboardBarData} = this.props;
        const loading = HomeDashboardBarData.length === 0 ? false : true;
        const config = {
            data: HomeDashboardBarData,
            isStack: true,
            xField: 'year',
            yField: 'value',
            seriesField: 'type',
            label: {
              position: 'middle',
              layout: [
                { type: 'interval-adjust-position' },
                { type: 'interval-hide-overlap' },
                { type: 'adjust-color' },
              ],
            },
        };
        return (
            <>
                {
                    loading 
                    ?
                    (
                        <div className="HomeDashboardBarComponent">
                            <Row className="content">
                                <Col span={24} className="content_row_one">
                                    堆叠图
                                </Col>

                                <Col span={24} className="content_row_two">
                                    <Column {...config} />
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
        SystemConfigData : store.SystemConfigData,
        HomeDashboardBarData : store.HomeDashboardBarData,
    }),{
        InitHomeDashboardBarDataAction,
    }
)( withRouter( HomeDashboardBar ) )