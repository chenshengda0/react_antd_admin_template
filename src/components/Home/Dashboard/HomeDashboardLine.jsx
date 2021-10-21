import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./HomeDashboardLine.scss"
import { Line } from '@ant-design/charts';
import {
    Row,
    Col,
} from "antd"
import {
    InitHomeDashboardLineDataAction,
} from "../../../redux/actions"

class HomeDashboardLine extends Component{

    componentDidMount(){
        this.props.InitHomeDashboardLineDataAction();
    }

    render(){
        const {HomeDashboardLineData} = this.props;
        const loading = HomeDashboardLineData.length === 0 ? false : true;
        const config = {
                data: HomeDashboardLineData,
                xField: 'year',
                yField: 'value',
                seriesField: 'category',
                xAxis: { type: 'time' },
                yAxis: {
                    label: {
                        formatter: function formatter(v) {
                            return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
                                return ''.concat(s, ',');
                            });
                        },
                    },
                },
            };
        return (
            <>
                {
                    loading 
                    ? 
                    (
                        <div className="HomeDashboardLineComponent">
                            <Row className="content">
                                <Col span={24} className="content_row_one">
                                    折线图
                                </Col>

                                <Col span={24} className="content_row_two">
                                    <Line {...config} />
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
        )
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
        HomeDashboardLineData : store.HomeDashboardLineData,
    }),{
        InitHomeDashboardLineDataAction,
    }
)( withRouter(HomeDashboardLine) );