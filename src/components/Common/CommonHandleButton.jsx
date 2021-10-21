import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import "./CommonHandleButton.scss"
import {
    Button,
    Row,
    Col,
} from "antd"

class CommonHandleButton extends Component{

    toHandle = window.debounce( (e)=>{
        this.props.toHandle(e);
    } ,1000)

    render(){
        const {comment} = this.props;
        return (
            <>
                <div className="CommonHandleButtonComponent">
                    <Row className="content">
                        <Col span={24} className="content_row_one">
                            <Button type="primary" shape={"round"} onClick={(e)=>this.toHandle(e)} className="handleBtn">{comment}</Button>
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
)( withRouter( CommonHandleButton ) );