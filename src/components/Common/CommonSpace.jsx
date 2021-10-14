import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonSpace.scss"
import {
    Row,
    Col,
} from "antd"

class CommonSpace extends Component{

    render(){
        return (
            <>
                <div className="CommonSpaceComponent">
                    <Row className="box">
                        <Col span={24} className="box_row_one">
                            <div className="content"></div>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }

}

export default connect(
    store => ({
        SystemConfigData : store.SystemConfigData,
    }),{

    }
)( withRouter( CommonSpace ) );