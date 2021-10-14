import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {
    WithContentTempContainer,
} from "../../../container" 
import {
    Row,
    Col,
} from "antd"
import {
    HomeDashboardTopListComponent,
    HomeDashboardLineComponent,
    HomeDashboardAreaComponent,
    HomeDashboardBarComponent,
} from "../../../components/Home/Dashboard"

class Home extends Component{

    render(){
        return (
            <>
                <Row>
                    <Col span={24}>
                        {/*统计*/}
                        <HomeDashboardTopListComponent></HomeDashboardTopListComponent>
                    </Col>
                    <Col span={24}>
                        <HomeDashboardAreaComponent></HomeDashboardAreaComponent>
                    </Col>
                    <Col span={24}>
                        <HomeDashboardLineComponent></HomeDashboardLineComponent>
                    </Col>
                    <Col span={24}>
                        <HomeDashboardBarComponent></HomeDashboardBarComponent>
                    </Col>
                </Row>
            </>
        );
    }
}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
    }),{

    }
)( withRouter( WithContentTempContainer( Home ) ) );