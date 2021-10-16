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
    CommonMarkdownComponent,
} from "../../../components/Common"

class MarkdownText extends Component{

    componentWillUnmount(){
        this.setState = ()=>false;
    }

    render(){
        return (
            <>
                <div>
                    <Row>
                        <Col span={24}>
                            <CommonMarkdownComponent>

                            </CommonMarkdownComponent>
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
)( withRouter( WithContentTempContainer( MarkdownText ) ) );